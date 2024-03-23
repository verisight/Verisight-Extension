import { Button } from "@/components/ui/button";

const Authentication = () => {
  // Function to handle internal navigation to the home page
  const handleLogin = () => {
    window.open("http://localhost:5173/login", "_blank");
  };

  // Function to handle internal navigation to the sign-up page
  const handleSignUp = () => {
    window.open("http://localhost:5173/signup", "_blank");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="11187155_4620633.svg" />
      <div className="w-32 h-64">
        <img src="WhiteLogo.png" alt="Verisight Logo" />
      </div>
      <div className="flex flex-row space-x-4">
        <Button className="font-bold py-2 px-4" onClick={handleLogin} asChild>
          <span>Login</span>
        </Button>
        <Button className="font-bold py-2 px-4" onClick={handleSignUp}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Authentication;
