import { useGlobalContext } from "@/GlobalContext";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogContent,
  DialogTitle,
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const DeleteAccount = () => {
  const { user } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  //Delete function
  const Delete = async () => {
    try {
      await fetch("http://localhost:3000/users/delete-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.userName,
        }),
      });
      setOpen(false);
      handleLogout();
      toast({
        title: "Account Deleted",
        description: "Your account has been deleted.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred. Please try again later.",
      });
    }
  };

  const handleLogout = () => {
    fetch("http://localhost:3000/users/logout", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        window.close();
        console.log(data);
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-[8.5rem]" variant="destructive">
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-center">
        <DialogHeader>
          <DialogTitle className="text-center">Delete Account</DialogTitle>
        </DialogHeader>
        <Button onClick={Delete} variant="destructive">
          Sure you want to delete your account?
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccount;