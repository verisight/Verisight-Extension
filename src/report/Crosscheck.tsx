import { useGlobalContext } from "@/GlobalContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

import CitationLink from "./components/CitationLink";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProfilePic from "./components/ProfilePic";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/loadingspinner";

const Crosscheck = () => {
  const [crosscheck, setCrosscheck] = useState("");
  const [citations, setCitations] = useState<Doc[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  interface Doc {
    pageContent: string;
    metadata: {
      title: string;
      source: string;
      score: number;
      img: object;
    };
  }

  interface ResponseData {
    cited_answer: {
      answer: string;
      citations: number[];
    };
    docs: Doc[];
  }

  const { article } = useGlobalContext();

  const handleCrosscheck = async () => {
    setIsLoading(true);
    console.log(article);

    const response = await fetch("https://api.verisightlabs.com/crosscheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: article.title,
        content: article.excerpt,
      }),
    });
    const data: ResponseData = await response.json();
    console.log(data);

    const answer = data.cited_answer.answer;
    const citations = data.cited_answer.citations;

    const citedDocs = citations.map((index) => data.docs[index]);

    setCrosscheck(answer);
    setCitations(citedDocs);
    setIsLoading(false);
  };

  return (
    <TabsContent
      value="crosscheck"
      className="grow align-middle justify-items-center"
    >
      <Card className="h-full">
        <Link to="/profile">
          <ProfilePic className="justify-self-end mt-3 mr-3" />
        </Link>
        <CardHeader className="pt-2">
          <CardTitle className="text-xl">Article Crosscheck</CardTitle>
          <CardDescription>Crosscheck the article using AI</CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="space-y-5">
            <div className="h-24 rounded-md border">
              {
                isLoading ? (
                  <LoadingSpinner size={24} text="Loading Crosscheck" />
                ) : (
                  <ScrollArea className="h-full w-full p-2">
                    {crosscheck}
                  </ScrollArea>
                )
              }
            </div>
            <CardTitle>Citations</CardTitle>
            <div className="h-24 rounded-md border">
              {
                isLoading ? (
                  <LoadingSpinner size={24} text="Loading Citations" />
                ) : (
                  <ScrollArea className="h-full w-full">
                    <div className="grid grid-cols-1 gap-1 m-3">
                      {citations.map((doc, index) =>
                        doc ? (
                          <CitationLink doc={doc} key={index} />
                        ) : (
                          <div>No Citations</div>
                        )
                      )}
                    </div>
                  </ScrollArea>
                )
              }
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-5">
          <Button className="w-full" onClick={handleCrosscheck}>
            Get Crosscheck
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default Crosscheck;
