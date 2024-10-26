import { useContext, useState } from "react";
import "./Header.scss";
import darkTheme from "../../assets/icons/dark-theme.svg";
import logoImg from "../../assets/logos/logo1.png";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState("home");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li
            onClick={() => handleActiveLink("home")}
            className={`nav-list__item ${
              activeLink === "home" ? "nav-list__item--active" : ""
            }`}
          >
            Home
          </li>
          <li
            onClick={() => handleActiveLink("about")}
            className={`nav-list__item ${
              activeLink === "about" ? "nav-list__item--active" : ""
            }`}
          >
            About
          </li>
          <li
            onClick={() => handleActiveLink("projects")}
            className={`nav-list__item ${
              activeLink === "projects" ? "nav-list__item--active" : ""
            }`}
          >
            Projects
          </li>
          <li
            onClick={() => handleActiveLink("connect")}
            className={`nav-list__item ${
              activeLink === "connect" ? "nav-list__item--active" : ""
            }`}
          >
            Connect
          </li>
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
