import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({} as any);

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props: any) => {
  const [article, setArticle] = useState({
    title: "",
    content: "",
    link: "",
    datePublished: "",
    prediction: 0,
    excerpt: "",
  });

  const [user, setUser] = useState({
    username: "",
    userId: "",
    email: "",
    designation: "",
  });

  interface Note {
    _id: string;
    articleLink: string;
    userId: string;
    noteContent: string;
    upvote: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  const [sessionCookie, setSessionCookie] = useState("");

  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        article,
        setArticle,
        user,
        setUser,
        notes,
        setNotes,
        sessionCookie,
        setSessionCookie,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const API = "https://api.verisightlabs.com";

export default AppContext;
