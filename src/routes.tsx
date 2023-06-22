import { useRoutes } from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";

export default function Router() {
    return useRoutes([
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
    ]);
}