import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Note } from "./components/Note";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useGlobalContext } from "@/GlobalContext";

const UserNoteView = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View user notes</Button>
      </DialogTrigger>
      <NotesList />
    </Dialog>
  );
};

function NotesList() {
  const { article, notes, setNotes } = useGlobalContext();

  const fetchNotes = async () => {
    await fetch("http://localhost:3000/notes/all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ articleLink: article.link }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader className="m-0">
        <DialogTitle>User Notes</DialogTitle>
        <ScrollArea className="h-72 w-full p-5">
          {notes?.length === 0 ? (
            <p>No Notes</p>
          ) : (
            notes?.map((note: any) => (
              <Note content={note.noteContent} id={note._id} upVote={true} />
            ))
          )}
        </ScrollArea>
      </DialogHeader>
    </DialogContent>
  );
}
export default UserNoteView;
