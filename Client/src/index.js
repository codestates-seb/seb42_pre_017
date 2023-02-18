import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { PostDetail } from "./pages/PostDetail";
import faker from "faker";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/postdetail/:id",
        element: <PostDetail />,
      },
    ],
    errorElement: <div>error!!</div>,
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
