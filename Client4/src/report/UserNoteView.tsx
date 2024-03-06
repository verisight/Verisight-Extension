
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Note } from "./components/Note"

const UserNoteView = () => {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader className="m-0">
                <DialogTitle>User Notes</DialogTitle>
                <ScrollArea className="h-72 w-full p-5">
                    <Note content="This is a note" id="asd" />
                </ScrollArea>
            </DialogHeader>
        </DialogContent>
    )
}

export default UserNoteView