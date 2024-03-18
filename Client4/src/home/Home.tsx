import { useGlobalContext } from "@/GlobalContext";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Readability } from '@mozilla/readability';
// import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

    interface Article {
        title: string;
        content: string;
        link: string;
        datePublished: string;
        excerpt?: string;
    }
    

    const { setArticle } = useGlobalContext();

    const navigate = useNavigate();
    // This function parses an article from HTML and posts it to a server
    async function parseArticle(html : string, articleURL : string) {
        // Create a new DOMParser
        const parser = new DOMParser();

        // Parse the HTML string into a Document object
        const doc = parser.parseFromString(html, "text/html");

        // Use Readability to parse the article from the Document
        const parsedArticle = new Readability(doc).parse();

        // If the article was successfully parsed
        if (parsedArticle) {
            // Create an article object with the parsed data
            const article = {
                title: parsedArticle.title.trim(),
                content: parsedArticle.textContent.trim(),
                link: articleURL,
                datePublished: parsedArticle.publishedTime,
            };

            // Post the article to the server
            await postArticle(article);

            // Set the article in the state and navigate to the report page
            setArticleAndNavigate(article, parsedArticle.excerpt.trim());
        }
    };

    // This function posts an article to the server
    async function postArticle(article : Article) {
        await fetch('http://localhost:3000/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        });
    }

    // This function sets the article in the state and navigates to the report page
    function setArticleAndNavigate(article : Article, excerpt : string) {
        setArticle({
            ...article,
            excerpt: excerpt
        });
        navigate("/report");
    }


    // const handleSubmit = async () => {
    //     try {
    //         const response = await fetch(articleURL);
    //         const html = await response.text();
    //         await parseArticle(html);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // This function fetches the HTML of the current tab and parses the article in it
    const handleFetchLink = async () => {
        // Define the options for the query
        let queryOptions = { active: true, currentWindow: true };

        // Query the current active tab
        let [tab] = await chrome.tabs.query(queryOptions);

        // If the tab exists and has an ID
        if (tab?.id) {
            // Execute a script in the tab to get the outer HTML of the document
            chrome.scripting.executeScript(
                {
                    target: { tabId: tab.id },
                    func: () => { return document.documentElement.outerHTML; },
                }, async (injectionResults) => {
                    // If the script execution was successful
                    if (injectionResults[0].result) {
                        // Parse the article in the HTML and post it to the server
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
                    Analyse current page
                </Button>
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