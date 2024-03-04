import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <div className="mb-8">
                <div className="w-12 h-12 my-5">
                    <img src="src\assets\WhiteLogo.png" alt="Verisight Logo" />
                </div>
            </div>
            <form className="flex flex-col space-y-5" >
                <Button className="font-bold py-2 px-4" >
                    Get Current Page URL
                </Button>
                <Separator className="my-4 w-full" />
                <Input 
                    className="font-bold py-2 px-4 text-white" 
                    placeholder="Enter URL" 
                    type="text"              
                />
                <Button className="font-bold py-2 px-4" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );

}

export default Home