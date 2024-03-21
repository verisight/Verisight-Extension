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
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { LoaderCircle } from "lucide-react";

const FormSchema = z.object({
  currentPassword: z.string().min(1, {
    message: "Password cannot be empty.",
  }),
  newPassword: z.string().min(6, {
    message: "New Password must be at least 6 characters.",
  }),
});

const ChangePassword = () => {
  const { user } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });

  function delay(milliseconds: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data.currentPassword);
    console.log(data.newPassword);
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/users/change-user-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: user.userName,
            oldPassword: data.currentPassword,
            newPassword: data.newPassword,
          }),
        }
      );

      if (!response.ok) {
        toast({
          variant: "destructive",
          description: "Error changing password.",
        });
        await delay(1000);
      } else {
        toast({
          description: "Password changed successfully.",
        });
        await delay(1000);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Error changing password.",
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
          Change Password
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Change Password</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your current password here"
                        className="resize-none h-8"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your new password here"
                        className="resize-none h-8"
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
                <Button type="submit">Change Password</Button>
              )}
            </DialogFooter>
          </form>
        </Form>
        <Toaster />
      </DialogContent>
    </Dialog>
  );
};

export default ChangePassword;
