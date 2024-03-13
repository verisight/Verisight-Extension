
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Note } from "./components/Note"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/GlobalContext";



const UserNoteView = () => {

    const { article } = useGlobalContext();
    

    const [notes, setNotes] = useState<any>([]);

    useEffect(() => {
        fetch("http://localhost:3000/notes/all", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ articleLink: article.link }),
        })
            .then((response) => response.json())
            .then((data) => {
                setNotes(data);
            });
    }, []);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>View user notes</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="m-0">
                    <DialogTitle>User Notes</DialogTitle>
                    <ScrollArea className="h-72 w-full p-5">
                        {notes.map((note: any) => {
                            return (
                                <Note content={note.noteContent} id={note._id} />
                            )
                        })}
                    </ScrollArea>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default UserNoteView