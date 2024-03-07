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





import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea';



const Profile = () => {
  return (
    <Card className="w-[350px]">
      <div className="grid grid-cols-3 place-items-center">
        <Avatar className="ml-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardHeader className="col-span-2 mr-1">
          <CardDescription>Lead DevOps - Verisight Labs</CardDescription>
          <CardTitle>Pragash Sasitharan</CardTitle>
        </CardHeader>
      </div>

      <CardContent className="grid grid-cols-2 place-items-center">
        <Dialog>
          <DialogTrigger asChild>
          <Button variant="outline">Change email</Button>
          </DialogTrigger>
          {/* <UserNoteAdd></UserNoteAdd> */}
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
          <Button variant="outline">Change password</Button>
          </DialogTrigger>
          {/* <UserNoteView></UserNoteView> */}
        </Dialog>
      </CardContent>
      <CardContent className="space-y-2">
      <div className="flex justify-center">
        <CardTitle>Notes Activity</CardTitle>
      </div>

      <div className="space-y-1">
          <Textarea id="summary" className="resize-none h-72" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  );
}

export default Profile;
