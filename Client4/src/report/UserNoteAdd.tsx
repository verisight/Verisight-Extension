import { Button } from "@/components/ui/button"
import { DialogHeader, DialogFooter, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

const UserNoteAdd = () => {
  return (
    <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User Note</DialogTitle>
          <DialogDescription>
            Add a note to the article with additional context
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <Textarea id="usernote" placeholder="User Note" className="resize-none h-72" />
        </div>
        <DialogFooter>
            <DialogClose asChild>
          <Button type="submit">Add Note</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
  )
}

export default UserNoteAdd