import "./AppLayout.scss";
import Header from "../Header/Header";
import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Footer from "../Footer/Footer";

const AppLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/projects") {
      document.body.style.backgroundColor = "#253237";
      document.body.style.color = "#c2dfe3";
    } else {
      document.body.style.backgroundColor = "#c2dfe3";
      document.body.style.color = "#253237";
    }
  }, [location.pathname]);

  return (
    <div className={`app`}>
      <ScrollToTop />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
