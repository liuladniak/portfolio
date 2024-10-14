import "./AppLayout.scss";
import Header from "../Header/Header";
// import Footer from '../Footer/Footer'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default AppLayout;
