import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import LandingPage from "./pages/Landing.jsx";

const router = createBrowserRouter([
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);