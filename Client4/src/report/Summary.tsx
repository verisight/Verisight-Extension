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
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {CirclePlus} from 'lucide-react';



const Summary = () => {
  const { article } = useGlobalContext();

  const [summary, setSummary] = useState("");

  const getSummary = async () => {
    // Fetch summary from server
    const response = await fetch("http://localhost:3000/summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    const data = await response.text();
    return data;
  };

  const handleGetSummary = async () => {
    const summary = await getSummary();
    setSummary(summary);
  };

  return (
    <TabsContent 
    value="summary"
    className="h-[460px] align-middle justify-items-center"
    >
      <div className="p-4 grid grid-cols-2 place-items-center">
        <Avatar className="ml-2 h-11 w-11">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button variant="ghost" size="icon" className="mr-2">
          <CirclePlus className="h-10 w-10" />
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Article Summary</CardTitle>
          <CardDescription>Summarize the article using AI</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Textarea
              id="summary"
              readOnly
              value={summary}
              className="resize-none h-72"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleGetSummary}>
            Get Summary
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default Summary;
