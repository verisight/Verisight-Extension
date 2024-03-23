import { useGlobalContext } from "@/GlobalContext";
import { LoadingSpinner } from "@/components/ui/loadingspinner";
import { Readability } from '@mozilla/readability';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotArticleError from "./components/NotArticleError";


const Home = () => {

    interface Article {
        title: string;
        content: string;
        link: string;
        datePublished: string;
        excerpt?: string;
    }

    const [isError, setIsError] = useState(false);

    const [url, setUrl] = useState("");

    const { setArticle } = useGlobalContext();

    const navigate = useNavigate();

    // This function parses an article from HTML and posts it to a server
    async function parseArticle(html: string, articleURL: string) {
        if (!isNewsWebsite(html, articleURL)) {
            setIsError(true);
            return;
        }

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
    async function postArticle(article: Article) {
        await fetch('https://api.verisightlabs.com/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        });
    }

    // This function sets the article in the state and navigates to the report page
    function setArticleAndNavigate(article: Article, excerpt: string) {
        setArticle({
            ...article,
            excerpt: excerpt
        });
        navigate("/report");
    }

    function isNewsWebsite(content: string, url: string) {
        const website_whitelist = ["www.bbc.com"];

        const hostname = new URL(url).hostname;
        if (website_whitelist.includes(hostname)) {
            return true;
        }

        // Convert HTML content string to a DOM element
        const tempElement = document.createElement('div');
        tempElement.innerHTML = content;

        // Analyze the DOM structure and content to identify common patterns
        const articleElements = tempElement.querySelectorAll('article, .article, .news, .story, .headline, [role="article"]');
        const headlineElements = tempElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const paragraphElements = tempElement.querySelectorAll('p');

        // Check if the page contains elements commonly found on news websites
        // Adjust these conditions based on the characteristics of news websites you want to detect
        const hasArticle = articleElements.length > 0;
        const hasHeadlines = headlineElements.length > 0;
        const hasParagraphs = paragraphElements.length > 0;

        // Determine if the webpage appears to be a news website based on the presence of common elements
        return hasArticle && hasHeadlines && hasParagraphs;
    }

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
                        setUrl(tab.url as string);
                        await parseArticle(injectionResults[0].result, tab.url as string);
                    }
                });
        }
    }

    useEffect(() => {
        handleFetchLink();
    }, []);

    return (
        (!isError ?
            <div className="h-full">
                <LoadingSpinner text="Analysing article"/>
            </div> :
            <NotArticleError url={url} />
        )
    )

}

export default Home