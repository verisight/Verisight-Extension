// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './report/Report.tsx'
// import { ThemeProvider } from './components/ui/theme-provider.tsx'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Onboard from "./onboard/Onboard.tsx";
import Authentication from "./auth/Authentication.tsx";
import Home from "./home/Home.tsx";
import Report from "./report/Report.tsx";
import AppContext from "./GlobalContext.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Onboard />,
  },
  {
    path: "/auth",
    element: <Authentication />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/report",
    element: <Report />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="w-[400px] h-[585px] flex flex-col px-[15px]">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AppContext>
          <RouterProvider router={router} />
        </AppContext>
      </ThemeProvider>
    </div>
  </React.StrictMode>
);
