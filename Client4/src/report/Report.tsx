import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Crosscheck from "./Crosscheck";
import Summary from "./Summary";
import { Input } from "@/components/ui/input";
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
import ProfilePic from "./components/ProfilePic";

const Report = () => {
  return (
    <Tabs defaultValue="incongruence" className="flex flex-col grow">
      <Crosscheck />
      <Summary />
      <Incongruence />
      <TabsList className="grid w-full grid-cols-3 mt-2">
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
      className="grow align-middle justify-items-center"
    >
      <Card className="h-full">
        <ProfilePic className="justify-self-end mt-3 mr-3" />
        <CardHeader>
          <CardTitle className="mb-5 text-xl text-nowrap truncate">{article.title}</CardTitle>
          <CardTitle>Article Stance</CardTitle>
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

