import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import "./styles/partials/_globals.scss";
import Homepage from "./pages/Homepage/Homepage";
import AppLayout from "./components/AppLoayout/AppLayout";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ConnectPage from "./pages/ConnectPage/ConnectPage";
import AboutPage from "./pages/AboutPage/AboutPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/connect",
        element: <ConnectPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
