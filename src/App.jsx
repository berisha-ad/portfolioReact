import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Imprint from "./pages/Imprint";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Projects />,
        path: "/projects",
      },
      {
        element: <Imprint />,
        path: "/imprint",
      },
      {
        element: <NotFound />,
        path: "*",
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
