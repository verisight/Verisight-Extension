import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Report = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <Tabs defaultValue="account" className="w-[400px] text-white">
                <TabsContent value="summary">View your summary here.</TabsContent>
                <TabsContent value="report">View your reports here.</TabsContent>
                <TabsContent value="crosscheck">View your crosscheck here.</TabsContent>
                <TabsList>
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="report">Report</TabsTrigger>
                    <TabsTrigger value="crosscheck">Cross Check</TabsTrigger>
                </TabsList>
            </Tabs>


        </div>
    )
}

export default Report