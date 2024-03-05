import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Crosscheck from "./Crosscheck"
import Summary from "./Summary"

const Report = () => {
  return (
    <Tabs defaultValue="crosscheck" className="w-[400px]">
      <Crosscheck />
      <Summary />
      <TabsList className="grid w-full grid-cols-2 mt-5">
        <TabsTrigger value="crosscheck">Crosscheck</TabsTrigger>
        <TabsTrigger value="summary">Summary</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default Report