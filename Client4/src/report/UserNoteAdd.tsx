import { useGlobalContext } from "@/GlobalContext"
import { Button } from "@/components/ui/button"
import { DialogHeader, DialogFooter, DialogContent, DialogTitle, DialogDescription, Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useState } from "react"

const FormSchema = z.object({
  usernote: z.string().min(1, {
    message: "User note cannot be empty.",
  }),
})

const UserNoteAdd = () => {

  const { article } = useGlobalContext();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      usernote: "",
    },
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    // Add user note to article
    console.log(data);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add user note</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add User Note</DialogTitle>
              <DialogDescription>
                Add a note to the article with additional context
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="usernote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User note</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="User note adding additional context to the article."
                        className="resize-none h-72"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Add Note</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default UserNoteAdd