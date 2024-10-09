// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { useContext } from "react";
import "./styles/partials/_globals.scss";
import Homepage from "./pages/Homepage/Homepage";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Homepage />
    </div>
  );
}

export default App;
