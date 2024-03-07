import { useGlobalContext } from "@/GlobalContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Readability } from '@mozilla/readability';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const { setArticle } = useGlobalContext();

    const navigate = useNavigate();

    const [articleURL, setArticleURL] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await fetch(articleURL);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            let article = new Readability(doc).parse();
            if (article) {
                setArticle({
                    title: article.title,
                    content: article.textContent,
                    link: articleURL,
                });
                navigate("/report");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleFetchLink = async (e: any) => {
        e.preventDefault();
        let queryOptions = { active: true, currentWindow: true };
        let tabs = await chrome.tabs.query(queryOptions);
        setArticleURL(tabs[0].url ?? '');
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="mb-8">
                <div className="w-12 h-12 my-5">
                    <img src="src\assets\WhiteLogo.png" alt="Verisight Logo" />
                </div>
            </div>
            <div className="flex flex-col space-y-5" >
                <Button className="font-bold py-2 px-4" onClick={handleFetchLink}>
                    Get Current Page URL
                </Button>
                <Separator className="my-4 w-full" />
                <Input
                    className="font-bold py-2 px-4"
                    placeholder="Enter URL"
                    value={articleURL}
                    type="text"
                    onChange={(e) => setArticleURL(e.target.value)}
                />
                <Button className="font-bold py-2 px-4" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    );

}

export default Home