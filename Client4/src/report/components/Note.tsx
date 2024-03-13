import { useGlobalContext } from "@/GlobalContext";
import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";

const Upvote = (props: { id: string }) => {
    const { id } = props;
    const {user} = useGlobalContext();

    const [upvoted, setUpvoted] = useState(false);
    
    useEffect(() => {
        fetch("http://localhost:3000/notes/isUpvoted", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                noteId: id,
                userId: user.userId, 
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setUpvoted(data);
            });
    }, [])
    
    return (
<Toggle 
    pressed={upvoted} 
    onPressedChange={() => { 
        fetch("http://localhost:3000/notes/upvote", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                _id: id,
                userId: user.userId, 
            }),
        })
        .then(() => fetch("http://localhost:3000/notes/isUpvoted", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                noteId: id,
                userId: user.userId,
            })
        })
        .then((response) => response.json())
        .then((data) => {
            setUpvoted(data);
        }));
    }}
>
    <ThumbsUp className="h-4 w-4"/>
</Toggle>


    )
}

export const Note = (props: { content: string, id: string }) => {
    const { content, id } = props;
    return (
        <Card className="mb-5 w-full" key={id}>
            <div className="p-4 flex justify-between items-center">
                <p className="text-sm">{content}</p>
                <Upvote id={id}/>
            </div>
        </Card>
    );
}