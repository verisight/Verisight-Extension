import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'

const Crosscheck = () => {
    return (<TabsContent value="crosscheck">
    <Card>
      <CardHeader>
        <CardTitle>Article Crosscheck</CardTitle>
        <CardDescription>
          Crosscheck the article using AI
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Textarea id="crosscheck"  placeholder="Article crosscheck" className="resize-none h-72" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Get Crosscheck</Button>
      </CardFooter>
    </Card>
  </TabsContent>);
}

export default Crosscheck