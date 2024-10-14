import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import "./styles/partials/_globals.scss";
import Homepage from "./pages/Homepage/Homepage";
import AppLayout from "./components/AppLoayout/AppLayout";
import CityGo from "./pages/CityGo/CityGo";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/city-go",
        element: <CityGo />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
