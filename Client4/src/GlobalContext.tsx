import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({} as any);

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props: any) => {
    const [article, setArticle] = useState({
        title: "",
        content: "",
        link: "",
        datePublished: '',
        prediction: 0
    });

    const [user, setUser] = useState({
        email: "",
    });

    return (
        <GlobalContext.Provider value={{ article, setArticle, user, setUser }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default AppContext;

