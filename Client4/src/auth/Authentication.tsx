import { Button } from "@/components/ui/button";

const Authentication = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <div className="w-32 h-64"><img src="src\assets\WhiteLogo.png" alt="Verisight Logo" /></div>
            <div className="flex flex-row space-x-4">
                <Button className="font-bold py-2 px-4">
                    Sign In
                </Button>
                <Button className="font-bold py-2 px-4">
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default Authentication;
