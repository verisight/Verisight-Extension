import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Crosscheck from "./Crosscheck";
import Summary from "./Summary";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import UserNoteAdd from "./UserNoteAdd";
import UserNoteView from "./UserNoteView";
import { useGlobalContext } from "@/GlobalContext";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CirclePlus } from 'lucide-react';


const Report = () => {
  return (
    <Tabs defaultValue="incongruence" className="w-[400px] h-[585px]">
      <Crosscheck />
      <Summary />
      <Incongruence />
      <TabsList className="grid w-full grid-cols-3 mt-20">
        <TabsTrigger value="crosscheck">Crosscheck</TabsTrigger>
        <TabsTrigger value="incongruence">Incongruence</TabsTrigger>
        <TabsTrigger value="summary">Summary</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

const Incongruence = () => {
  const { article } = useGlobalContext();

  const [prediction, setPrediction] = useState("");

  const [featuredNote, setFeaturedNote] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/articles/getArticle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ link: article.link }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.prediction === 0) setPrediction("agrees with");
        else if (data.prediction === 1) setPrediction("disagrees with");
        else if (data.prediction === 2) setPrediction("discusses");
        else setPrediction("is unrelated to");
      });

    fetch("http://localhost:3000/notes/featuredNote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ articleLink: article.link }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFeaturedNote(data.noteContent);
      });

  }, []);

  return (
    <TabsContent
      value="incongruence"
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
        <CardHeader className="items-center">
          <CardTitle className="mb-5 text-xl text-nowrap truncate">{article.title}</CardTitle>
          <CardDescription className="w-full">
            <Input
              readOnly
              value={`The article ${prediction} the content`}
              className="text-center"
            />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              <CardTitle>Featured Note</CardTitle>
            </p>
            {featuredNote ? (
              <Textarea
                readOnly
                id="featurednote"
                placeholder="Featured Note"
                className="resize-none h-52"
                value={featuredNote}
              />
            ) : (
              <Textarea
                readOnly
                id="featurednote"
                placeholder="No featured note available."
                className="resize-none h-52"
              />
            )}
          </div>
        </CardContent>
        <CardFooter className=" grid w-full grid-cols-2 space-x-4">
          <UserNoteAdd />
          <UserNoteView />
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default Report;
