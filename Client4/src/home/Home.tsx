import { useGlobalContext } from "@/GlobalContext";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Readability } from '@mozilla/readability';
// import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const { setArticle } = useGlobalContext();

    const navigate = useNavigate();

    async function parseArticle(html: string, articleURL: string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const parsedArticle = new Readability(doc).parse();

        if (parsedArticle) {
            const article = {
                title: parsedArticle.title.replace(/\n/g, '').replace(/\t/g, ''),
                content: parsedArticle.textContent.replace(/\n/g, '').replace(/\t/g, ''),
                link: articleURL,
                datePublished: parsedArticle.publishedTime,
            };

            await fetch('http://localhost:3000/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(article)
            });

            setArticle({
                title: article.title.replace(/\n/g, '').replace(/\t/g, ''),
                content: article.content.replace(/\n/g, '').replace(/\t/g, ''),
                link: articleURL,
                datePublished: article.datePublished,
                excerpt: parsedArticle.excerpt.replace(/\n/g, '').replace(/\t/g, '')
            });
            navigate("/report");
        }
    };

    // const handleSubmit = async () => {
    //     try {
    //         const response = await fetch(articleURL);
    //         const html = await response.text();
    //         await parseArticle(html);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleFetchLink = async () => {
        let queryOptions = { active: true, currentWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);

        if (tab?.id) {
            chrome.scripting.executeScript(
                {
                    target: { tabId: tab.id },
                    func: () => { return document.documentElement.outerHTML; },
                }, async (injectionResults) => {
                    if (injectionResults[0].result) {
                        await parseArticle(injectionResults[0].result, tab.url as string);
                    }
                });
        }
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="mb-8">
                <div className="w-12 h-12 my-5">
                    <img src="WhiteLogo.png" alt="Verisight Logo" />
                </div>
            </div>
            <div className="flex flex-col space-y-5" >
                <Button className="font-bold py-2 px-4" onClick={handleFetchLink}>
                    Get Current Page URL
                </Button>
                <Separator className="my-4 w-full" />
                {/* <Input
                    className="font-bold py-2 px-4"
                    placeholder="Enter URL"
                    value={articleURL}
                    type="text"
                    onChange={(e) => setArticleURL(e.target.value)}
                />
                <Button className="font-bold py-2 px-4" type="submit" onClick={handleSubmit}>
                    Submit
                </Button> */}
            </div>
        </div>
    );

}

export default Home