import { useGlobalContext } from "@/GlobalContext";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loadingspinner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Onboard = () => {
  const { setUser } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  const handleLogin = () => {
    window.open("http://localhost:5173/login", "_blank");
  };

  // Function to handle internal navigation to the sign-up page
  const handleSignUp = () => {
    window.open("http://localhost:5173/signup", "_blank");
  };

  const navigate = useNavigate();

  useEffect(() => {
    // Get all cookies for the specified URL
    chrome.cookies.getAll(
      { url: "https://auth.verisightlabs.com/" },
      (cookies) => {
        cookies.forEach((cookie) => {
          // Set each cookie to the document
          document.cookie = `${cookie.name}=${cookie.value}`;
        });
      }
    );

    // Test protected route
    fetch("http://localhost:3000/users/protected", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          // If response is OK, parse the JSON response
          return response.json();
        } else {
          // Log the response if it's not OK
          console.log("Response: ", response);
          throw new Error("Response not OK");
        }
      })
      .then((data) => {
        // Set the user data and navigate to home
        setUser(data);
        navigate("/home");
      })
      .catch((error) => {
        // Log any errors and stop loading
        console.log("Error: ", error);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="Tick.png" alt="VeriSight Logo" className="py-5" />
      <h4 className="font-bold text-xl my-0">Don't trust whatever you see</h4>
      <div className="border-black">
        <h3 className="text-wrap text-center justify-center px-12 py-5">
          Say goodbye to falling for fake news and misleading headlines with
          Verisight, the cutting-edge AI-powered tool designed to keep you
          informed and protected online. With state-of-the-art algorithms and
          real-time fact-checking, Verisight instantly identifies unreliable
          sources and alerts you to potential misinformation. Stay one step
          ahead of the clickbait trap and browse the web with confidence.
          <br />
          <span className="font-semibold py-2 text-sm">
            Try Verisight today!
          </span>
        </h3>
      </div>
      <div className="flex flex-col space-y-2">
        <Button
          className="font-bold w-[17.5rem] py-2 px-4"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          className="font-bold w-[17.5rem] py-2 px-4"
          onClick={handleSignUp}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Onboard;
