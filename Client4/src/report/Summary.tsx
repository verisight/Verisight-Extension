import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

const Summary = () => {
    return (<TabsContent value="summary">
    <Card>
      <CardHeader>
        <CardTitle>Article Summary</CardTitle>
        <CardDescription>
          Summarize the article using AI
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
      <div className="space-y-1">
          <Textarea id="summary"  placeholder="Article summary" className="resize-none h-72" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Ger Summary</Button>
      </CardFooter>
    </Card>
  </TabsContent>);
}

export default Summary