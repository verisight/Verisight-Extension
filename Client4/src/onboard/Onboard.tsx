import { useGlobalContext } from "@/GlobalContext";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loadingspinner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Onboard = () => {
  const { setUser } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  const handleLogin = () => {
    window.open("https://auth.verisightlabs.com/login", "_blank");
  };

  // Function to handle internal navigation to the sign-up page
  const handleSignUp = () => {
    window.open("https://auth.verisightlabs.com/signup", "_blank");
  };

  const navigate = useNavigate();

  useEffect(() => {
    // Get all cookies for the specified URL
    chrome.cookies.get(
      { url: "https://verisightlabs.com", name: "connect.sid" },
      (cookie) => {
        // If the cookie exists, log the cookie value
        const cookieValue = cookie?.value;

        fetch("https://api.verisightlabs.com/users/auth/cookie", {
          method: "POST",
          body: JSON.stringify({ session: cookieValue }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("Response: ", response);
            throw new Error("Response not OK");
          }
        })
        .then((data) => {
          setUser(data);
          navigate("/home");
        })
        .catch((error) => {
          console.log("Error: ", error);
          setLoading(false);
        });
      });
    }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="Tick.png" alt="VeriSight Logo" className="py-5" />
      <h4 className="font-extrabold text-xl my-0">
        Don't trust whatever you see
      </h4>
      <div className="border-black pb-2">
        <h3 className="text-wrap font-semibold text-center justify-center px-5 py-5">
          An AI tool that detects fake news and misleading headlines online.
          Using cutting-edge algorithms, it instantly identifies unreliable
          sources and alerts users to potential misinformation, helping them
          browse the web with confidence and avoid falling for clickbait traps.
          <br />
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
