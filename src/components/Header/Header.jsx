import { useContext } from "react";
import "./Header.scss";
import darkTheme from "../../assets/icons/dark-theme.svg";
import logoImg from "../../assets/logos/logo1.png";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="logo">
        <img className="logo" src={logoImg} alt="logo" />
      </div>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list__item">Projects</li>
          <li className="nav-list__item">Contact</li>
          <li className="nav-list__item" onClick={toggleTheme}>
            <div className="dark-theme">
              <img src={darkTheme} alt="icon of a moon with stars" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
