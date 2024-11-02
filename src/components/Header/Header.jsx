import { useContext, useEffect, useState } from "react";
import "./Header.scss";
import darkTheme from "../../assets/icons/dark-theme.svg";
import logoImg from "../../assets/logos/logo1.png";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "" : "solid-header"}`}>
      <nav className="nav">
        <ul className="nav-list">
          <Link
            to="/"
            onClick={() => handleActiveLink("home")}
            className={`nav-list__item ${
              activeLink === "home" ? "nav-list__item--active" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => handleActiveLink("about")}
            className={`nav-list__item ${
              activeLink === "about" ? "nav-list__item--active" : ""
            }`}
          >
            About
          </Link>

          <Link
            to="/projects"
            onClick={() => handleActiveLink("projects")}
            className={`nav-list__item ${
              activeLink === "projects" ? "nav-list__item--active" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            to="/connect"
            onClick={() => handleActiveLink("connect")}
            className={`nav-list__item ${
              activeLink === "connect" ? "nav-list__item--active" : ""
            }`}
          >
            Connect
          </Link>
          <li className="nav-list__item">
            <div className="dark-theme" onClick={toggleTheme}>
              <img src={darkTheme} alt="icon of a moon with stars" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
