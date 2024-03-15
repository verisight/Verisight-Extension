import { useGlobalContext } from "@/GlobalContext";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loadingspinner";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Onboard = () => {
  const { setUser } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    chrome.cookies.getAll({ url: "http://localhost:5173" }, (cookies) => {
      cookies.forEach((cookie) => {
        document.cookie = `${cookie.name}=${cookie.value}`;
      });
    });
    //test protected route
    fetch("http://localhost:3000/users/protected", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setUser(data);
            navigate("/home");
          });
        } else {
          console.log("response", response);
        }
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-2/6 h-2/6 py-0 fill-blue-600"
      >
        <path
          fillRule="evenodd"
          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397a4.491 4.491 0 0 1-1.307 3.497a4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549a4.49 4.49 0 0 1-3.498-1.306a4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497a4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clipRule="evenodd"
        />
      </svg>
      <h4 className="font-bold my-0">Don’t trust whatever you see</h4>
      <h3 className="text-wrap px-10 py-5 my-5">
        Say goodbye to falling for fake news and misleading headlines with
        VeriSight, the cutting-edge AI-powered tool designed to keep you
        informed and protected online. With state-of-the-art algorithms and
        real-time fact-checking, VeriSight instantly identifies unreliable
        sources and alerts you to potential misinformation. Stay one step ahead
        of the clickbait trap and browse the web with confidence.Try VeriSight
        today!
      </h3>
      <Button className="my-5" asChild>
        <Link to="/auth">Continue</Link>
      </Button>
    </div>
  );
};

export default Onboard;
