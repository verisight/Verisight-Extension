import { useGlobalContext } from "@/GlobalContext";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTitle,
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { LoaderCircle } from "lucide-react";

const FormSchema = z.object({
  username: z.string().min(1, {
    message: "Username cannot be empty.",
  }),
});

const ChangeUsername = () => {
  const { user } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function delay(milliseconds: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    try {
      const response = await fetch("https://api.verisightlabs.com/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.userId,
          username: data.username,
        }),
      });

      if (!response.ok) {
        toast({
          variant: "destructive",
          description: "Error changing username.",
        });
        await delay(1000);
      } else {
        toast({
          description: "Username changed successfully.",
        });
        await delay(1500);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Error changing username.",
      });
      await delay(1000);
      console.error(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-[8.5rem]" variant="outline">
          Change username
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Change Username</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Username</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your new username here"
                        className="resize-none h-22"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              {loading ? (
                <Button disabled>
                  <LoaderCircle className="animate-spin" />
                  Add note
                </Button>
              ) : (
                <Button type="submit">Change</Button>
              )}
            </DialogFooter>
          </form>
        </Form>
        <Toaster />
      </DialogContent>
    </Dialog>
  );
};

export default ChangeUsername;
