import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Authentication = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-32 h-64"><img src="WhiteLogo.png" alt="Verisight Logo" /></div>
            <div className="flex flex-row space-x-4">
                <Button className="font-bold py-2 px-4" asChild>
                    <Link to="/home">Login</Link>
                </Button>
                <Button className="font-bold py-2 px-4">
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default Authentication;
