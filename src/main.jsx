import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from "./pages/HomePages.jsx";
import AboutPages from "./pages/AboutPages.jsx";
import Contact from "./pages/Contact.jsx";
import PropsDrilingContextProvider from "./context/PropsDriling.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/about",
    element: <AboutPages />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PropsDrilingContextProvider>
      <RouterProvider router={router} />
    </PropsDrilingContextProvider>
  </React.StrictMode>
);
