import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Crosscheck from "./Crosscheck"
import Summary from "./Summary"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import UserNoteAdd from "./UserNoteAdd"
import UserNoteView from "./UserNoteView"
import { useGlobalContext } from "@/GlobalContext"

const Report = () => {
  
  return (
    <Tabs defaultValue="incongruence" className="w-[400px]">
      <Crosscheck />
      <Summary />
      <Incongruence />
      <TabsList className="grid w-full grid-cols-3 mt-5">
        <TabsTrigger value="crosscheck">Crosscheck</TabsTrigger>
        <TabsTrigger value="incongruence">Incongruence</TabsTrigger>
        <TabsTrigger value="summary">Summary</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

const Incongruence = () => {
  const { article } = useGlobalContext();

  return (<TabsContent value="incongruence">
    <Card>
      <CardHeader className="items-center">
        <CardTitle className="mb-5">{article.title}</CardTitle>
        <CardDescription className="w-full">
          <Input readOnly value="The article relates to the content" className="text-center" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Textarea readOnly id="featurednote" placeholder="Featured Note" className="resize-none h-72" />
        </div>
      </CardContent>
      <CardFooter className=" grid w-full grid-cols-2 space-x-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add user note</Button>
          </DialogTrigger>
          <UserNoteAdd></UserNoteAdd>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button>View user notes</Button>
          </DialogTrigger>
          <UserNoteView></UserNoteView>
        </Dialog>
      </CardFooter>
    </Card>
  </TabsContent >);
}

export default Report