import { useGlobalContext } from "@/GlobalContext";
import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { ThumbsUp, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const Upvote = (props: { id: string }) => {
  const { id } = props;
  const { user } = useGlobalContext();

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
  }, []);

  return (
    <Toggle
      pressed={upvoted}
      onPressedChange={() => {
        fetch("https://api.verisightlabs.com/notes/upvote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            noteId: id,
            userId: user.userId,
          }),
        }).then(() =>
          fetch("https://api.verisightlabs.com/notes/isUpvoted", {
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
            })
        );
      }}
    >
      <ThumbsUp className="h-4 w-4" />
    </Toggle>
  );
};

const Delete = (props: { id: string }) => {
  const { id } = props;
  const { user } = useGlobalContext();
  const { notes, setNotes } = useGlobalContext();

  type Note = {
    _id: string;
    articleLink: string;
    userId: string;
    noteContent: string;
    upvote: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };

  return (
    <button
      onClick={() => {
        fetch("https://api.verisightlabs.com/notes/delete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _id: id,
            userId: user.userId,
          }),
        });
        setNotes(notes.filter((note: Note) => note._id !== id));
      }}
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
};

export const Note = (props: {
  content: string;
  id: string;
  upVote: boolean;
}) => {
  const { content, id, upVote } = props;
  return (
    <Card className="mb-5 w-full" key={id}>
      <div className="p-4 flex justify-between items-center">
        <p className="text-sm">{content}</p>
        {upVote === true ? <Upvote id={id} /> : <Delete id={id} />}
      </div>
    </Card>
  );
};
