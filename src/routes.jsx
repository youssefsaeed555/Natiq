import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Natiq from "./pages/Natiq/Natiq";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "natiq",
        element: <Natiq />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
