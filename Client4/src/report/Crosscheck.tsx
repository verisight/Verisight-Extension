import { useGlobalContext } from '@/GlobalContext';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Crosscheck = () => {


  const [crosscheck, setCrosscheck] = useState("");
  const [citations, setCitations] = useState<Doc[]>([]);

  interface Doc {
    pageContent: string;
    metadata: {
      title: string;
      source: string;
      score: number;
      img: object;
    };
  }

  interface ResponseData {
    cited_answer: {
      answer: string;
      citations: number[];
    };
    docs: Doc[];
  }

  const { article } = useGlobalContext();

  const handleCrosscheck = async () => {
    console.log(article);

    const response = await fetch('http://localhost:3000/crosscheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: article.title,
        content: article.excerpt
      })
    });
    const data: ResponseData = await response.json();
    console.log(data);


    const answer = data.cited_answer.answer;
    const citations = data.cited_answer.citations;

    const citedDocs = citations.map(index => data.docs[index]);

    setCrosscheck(answer);
    setCitations(citedDocs);
  }


  return (<TabsContent value="crosscheck">
    <Card>
      <CardHeader>
        <CardTitle>Article Crosscheck</CardTitle>
        <CardDescription>
          Crosscheck the article using AI
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="space-y-5">
          <Textarea id="crosscheck" readOnly value={crosscheck} className="resize-none h-24" />
          <CardTitle>Citations</CardTitle>
          <Card>
            <CardContent className='grid grid-cols-1 gap-1 my-3 overflow-y-auto resize-none h-24'>
              {citations.map((doc, index) => {
                return doc ? (
                  <a
                    href={doc.metadata.source}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                    className={`truncate ${buttonVariants({ variant: "outline" })}`}
                  >
                    {doc.metadata.title}
                  </a>
                ) : (
                  <div>No Citations</div>
                );
              })}
            </CardContent>

          </Card>
        </div>
      </CardContent>
      <CardFooter className='mt-5'>
        <Button className="w-full" onClick={handleCrosscheck}>Get Crosscheck</Button>
      </CardFooter>
    </Card>
  </TabsContent>);
}

export default Crosscheck