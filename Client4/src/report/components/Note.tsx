import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { ThumbsUp } from "lucide-react";

const Upvote = () => {
    return (
        <Toggle>
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
                <Upvote />
            </div>
        </Card>
    );
}