// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import Crosscheck from "./report/Crosscheck"
// import Summary from "./report/Summary"
// import Incongruence from "./report/Report"
// // import { Input } from "@/components/ui/input"
// // import { Button } from "@/components/ui/button"
// // import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Dialog, DialogTrigger } from "@/components/ui/dialog"
// // import UserNoteAdd from "./UserNoteAdd"
// // import UserNoteView from "./UserNoteView"

// const Profile = () => {
//   return (
//     <Tabs defaultValue="crosscheck" className="w-[400px]">
//       <Crosscheck />
//       <Summary />
//       <Incongruence />
//       <TabsList className="grid w-full grid-cols-3 mt-5">
//         <TabsTrigger value="crosscheck">Crosscheck</TabsTrigger>
//         <TabsTrigger value="incongruence">Incongruence</TabsTrigger>
//         <TabsTrigger value="summary">Summary</TabsTrigger>
//       </TabsList>
//     </Tabs>
//   )
// }

// // const Main = () => {
// //   return (<TabsContent value="incongruence">
// //     <Card>
// //       <CardHeader className="items-center">
// //         <CardTitle className="mb-5">Headline</CardTitle>
// //         <CardDescription className="w-full">
// //           <Input readOnly value="The article relates to the content" className="text-center" />
// //         </CardDescription>
// //       </CardHeader>
// //       <CardContent className="space-y-2">
// //         <div className="space-y-1">
// //           <Textarea readOnly id="featurednote" placeholder="Featured Note" className="resize-none h-72" />
// //         </div>
// //       </CardContent>
// //       <CardFooter className=" grid w-full grid-cols-2 space-x-4">
// //         <Dialog>
// //           <DialogTrigger asChild>
// //             <Button>Add user note</Button>
// //           </DialogTrigger>
// //           {/* <UserNoteAdd></UserNoteAdd> */}
// //         </Dialog>
// //         <Dialog>
// //           <DialogTrigger asChild>
// //             <Button>View user notes</Button>
// //           </DialogTrigger>
// //           {/* <UserNoteView></UserNoteView> */}
// //         </Dialog>
// //       </CardFooter>
// //     </Card>
// //   </TabsContent >);
// // }

// export default Profile

// import { TabsContent } from "@/components/ui/tabs"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import Crosscheck from "./report/Crosscheck"
// // import Summary from "./report/Summary"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
// import { Textarea } from "@/components/ui/textarea"
// import { Dialog, DialogTrigger } from "@/components/ui/dialog"
// // import UserNoteAdd from "./UserNoteAdd"
// // import UserNoteView from "./UserNoteView"

// // const Report = () => {
// //   return (
// //     <Tabs defaultValue="crosscheck" className="w-[400px]">
// //       <Crosscheck />
// //       <Summary />
// //       <Incongruence />
// //       <TabsList className="grid w-full grid-cols-3 mt-5">
// //         <TabsTrigger value="crosscheck">Crosscheck</TabsTrigger>
// //         <TabsTrigger value="incongruence">Incongruence</TabsTrigger>
// //         <TabsTrigger value="summary">Summary</TabsTrigger>
// //       </TabsList>
// //     </Tabs>
// //   )
// // }

// const Profile = () => {
//   return (<TabsContent value="incongruence">
//     <Card>
//       <CardHeader className="items-center">
//         <CardTitle className="mb-5">Headline</CardTitle>
//         <CardDescription className="w-full">
//           <Input readOnly value="The article relates to the content" className="text-center" />
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-2">
//         <div className="space-y-1">
//           <Textarea readOnly id="featurednote" placeholder="Featured Note" className="resize-none h-72" />
//         </div>
//       </CardContent>
//       <CardFooter className=" grid w-full grid-cols-2 space-x-4">
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button>Add user note</Button>
//           </DialogTrigger>
//           {/* <UserNoteAdd></UserNoteAdd> */}
//         </Dialog>
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button>View user notes</Button>
//           </DialogTrigger>
//           {/* <UserNoteView></UserNoteView> */}
//         </Dialog>
//       </CardFooter>
//     </Card>
//   </TabsContent >);
// }

// export default Profile

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import Crosscheck from "./report/Crosscheck"
// import Summary from "./report/Summary"
// // import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// // import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
// import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
// // import { Textarea } from "@/components/ui/textarea"
// import { Dialog, DialogTrigger } from "@/components/ui/dialog"
// // import UserNoteAdd from "./UserNoteAdd"
// // import UserNoteView from "./UserNoteView"

// const Report = () => {
//   return (
//     <Tabs defaultValue="crosscheck" className="w-[400px]">
//       <Crosscheck />
//       <Summary />
//       <Incongruence />
//       <TabsList className="grid w-full grid-cols-3 mt-5">
//         <TabsTrigger value="crosscheck">Crosscheck</TabsTrigger>
//         <TabsTrigger value="incongruence">Incongruence</TabsTrigger>
//         <TabsTrigger value="summary">Summary</TabsTrigger>
//       </TabsList>
//     </Tabs>
//   )
// }

// const Incongruence = () => {
//   return (<TabsContent value="incongruence">
//     <Card>
//       <CardHeader className="items-center">
//         <CardTitle >Job Role</CardTitle>
//         <CardDescription>Full Name</CardDescription>
//       </CardHeader>
//       {/* <CardContent className="space-y-2">
//         <div className="space-y-1">
//           <Textarea readOnly id="featurednote" placeholder="Featured Note" className="resize-none h-72" />
//         </div>
//       </CardContent> */}
//       <CardFooter className=" grid w-full grid-cols-2 space-x-4">
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button>Add user note</Button>
//           </DialogTrigger>
//           {/* <UserNoteAdd></UserNoteAdd> */}
//         </Dialog>
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button>View user notes</Button>
//           </DialogTrigger>
//           {/* <UserNoteView></UserNoteView> */}
//         </Dialog>
//       </CardFooter>
//     </Card>
//     <Tabs defaultValue="crosscheck" className="w-[400px]">
//       <Crosscheck />
//       <Summary />
//       <Incongruence />
//       <TabsList className="grid w-full grid-cols-3 mt-5">
//         <TabsTrigger value="crosscheck">Crosscheck</TabsTrigger>
//         <TabsTrigger value="incongruence">Incongruence</TabsTrigger>
//         <TabsTrigger value="summary">Summary</TabsTrigger>
//       </TabsList>
//     </Tabs>
//   </TabsContent >);
// }

// export default Report

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Note } from "../report/components/Note";
// import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "@/GlobalContext";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

const Profile = () => {
  const { user } = useGlobalContext();

  interface Note {
    _id: string;
    articleLink: string;
    userId: string;
    noteContent: string;
    upvote: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  const [notes, setNotes] = useState<Note[]>([]);

  //Fetch notes of the specific user from the server
  const fetchNotes = async () => {
    await fetch("http://localhost:3000/notes/userNotesbyId", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      });
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

  useEffect(() => {
    fetchNotes();
    console.log(user);
  }, []);

  return (
    <Card className="my-2">
      <div className="grid grid-cols-3 place-items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardHeader className="px-3  space-y-0 col-span-2 mr-1">
          <CardDescription className="text-[14px]">
            {user.designation ? user.designation : "Error Loading"}
          </CardDescription>
          <CardTitle className="text-[20px] p-0 m-0">
            {user.userName ? user.userName : "Error Loading"}
          </CardTitle>
        </CardHeader>
      </div>

      <CardContent className="grid grid-cols-2 place-items-center">
        {/* <Dialog>
          <DialogTrigger asChild>
            <Button className="w-[8.5rem]" variant="outline">
              Change Username
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Change Username</DialogTitle>
            </DialogHeader>
            <FormField control={form.control} name="username" render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                <Textarea placeholder="Enter New Userame" {...field} />
                </FormControl>
              </FormItem>
            )}>
            </FormField>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-[8.5rem]" variant="outline">
              Change Password
            </Button>
          </DialogTrigger>
        </Dialog> */}
        <ChangePassword />
        <DeleteAccount />
      </CardContent>
      <CardContent className="space-y-2 mx-5 mb-3 p-3 rounded-[10px] border ">
        <div className="flex justify-center">
          <CardTitle className="text-lg">Notes Activity</CardTitle>
        </div>
        <div className="space-y-1">
          <ScrollArea className="h-72 w-full p-4">
            {notes?.length === 0 ? (
              <p className="text-center text-sm">No Notes</p>
            ) : (
              notes?.map((note: any) => (
                <Note content={note.noteContent} id={note._id} upVote={false} />
              ))
            )}
          </ScrollArea>
        </div>
      </CardContent>
      <CardFooter className="flex pb-4 justify-between">
        <Link to="/report">
          <Button className="w-[8.5rem]" variant="outline">
            Back to Home
          </Button>
        </Link>
        <Button
          onClick={handleLogout}
          className="w-[8.5rem]"
          variant="destructive"
        >
          Log Out
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Profile;
