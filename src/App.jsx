import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import "./styles/partials/_globals.scss";
import Homepage from "./pages/Homepage/Homepage";
import AppLayout from "./components/AppLoayout/AppLayout";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

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
        element: <Homepage />,
      },
      {
        path: "/connect",
        element: <Homepage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
