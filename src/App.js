import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <h1>OMG, something went wrong, just like Pakistan 🇵🇰 😂</h1>,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: (
          <h1>OMG, something went wrong, just like Pakistan 🇵🇰 😂</h1>
        ),
      },
      {
        path: "/about",
        element: <About />,
        errorElement: (
          <h1>OMG, something went wrong, just like Pakistan 🇵🇰 😂</h1>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: (
          <h1>OMG, something went wrong, just like Pakistan 🇵🇰 😂</h1>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
