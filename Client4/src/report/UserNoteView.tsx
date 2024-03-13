
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Note } from "./components/Note"
import { Button } from "@/components/ui/button"

const UserNoteView = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>View user notes</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="m-0">
                    <DialogTitle>User Notes</DialogTitle>
                    <ScrollArea className="h-72 w-full p-5">
                        <Note content="This is a note" id="asd" />
                    </ScrollArea>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default UserNoteView