import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Crosscheck from "./Crosscheck";
import Summary from "./Summary";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import UserNoteAdd from "./UserNoteAdd";
import UserNoteView from "./UserNoteView";
import { useGlobalContext } from "@/GlobalContext";
import { useEffect, useState } from "react";
import ProfilePic from "./components/ProfilePic";
import { Link } from "react-router-dom";
import { Circle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Report = () => {
  return (
    <Tabs defaultValue="incongruence" className="flex flex-col grow">
      <Crosscheck />
      <Summary />
      <Incongruence />
      <TabsList className="grid w-full grid-cols-3 mb-2 mt-2">
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

  const [predictionColor, setPredictionColor] = useState("");

  const [featuredNote, setFeaturedNote] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/articles/getArticle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ link: article.link }),
    })
      .then((response) => response.json())
      .then((data) => {
        type PredictionMapping = {
          [key: number]: { text: string; color: string };
        };

        const predictionMapping: PredictionMapping = {
          0: { text: "agrees with", color: "text-green-500 fill-green-500" },
          1: { text: "disagrees with", color: "text-red-500 fill-red-500" },
          2: { text: "discusses", color: "text-blue-500 fill-blue-500" },
          3: { text: "is unrelated to", color: "text-gray-500 fill-gray-500" },
        };

        const predictionData =
          predictionMapping[data.prediction] || predictionMapping[3];
        setPrediction(predictionData.text);
        setPredictionColor(predictionData.color);
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
        <Link to="/profile">
          <ProfilePic className="justify-self-end mt-3 mr-3" />
        </Link>
        <CardHeader className="pt-2">
          <CardTitle className="mb-1 text-xl text-nowrap truncate">
            {article.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          <CardTitle>Article Stance</CardTitle>
          <div className="flex h-9 w-full rounded-md border px-3 py-1 items-center justify-center">
            <Circle className={predictionColor} />{" "}
            <span className="pl-2">The headline {prediction} the article.</span>
          </div>
        </CardContent>
        <CardContent>
          <div className="space-y-5">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              <CardTitle>Featured Note</CardTitle>
            </p>
            <div className="h-48 rounded-md border">
              {featuredNote ? (
                <ScrollArea className="h-full w-full p-2">
                  {featuredNote}
                </ScrollArea>
              ) : (
                <div className="mt-4 text-center">
                  No featured note available
                </div>
              )}
            </div>
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
