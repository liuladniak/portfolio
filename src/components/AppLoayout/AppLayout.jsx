import "./AppLayout.scss";
import Header from "../Header/Header";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundColor = "#232946";
      document.body.style.color = "#b8c1ec";
    } else {
      document.body.style.backgroundColor = "#b8c1ec";
      document.body.style.color = "#232946";
    }
  }, [location.pathname]);

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
