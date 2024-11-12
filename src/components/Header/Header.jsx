import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTabletOrDesktop = useResponsive(768);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/connect", name: "Connect" },
  ];

  const hamburgerClass = ["/", "/projects"].includes(location.pathname)
    ? "hamburger--primary"
    : "hamburger--secondary";

  const spring = {
    type: "spring",
    stiffness: 600,
    damping: 35,
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const MotionLink = motion(Link);

  return (
    <header
      className={`header ${isScrolled ? "" : "solid-header"} ${
        isMenuOpen ? "header--open" : ""
      }`}
    >
      <button className={`hamburger ${hamburgerClass}`} onClick={toggleMenu}>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </button>

      <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
        <ul className="nav-list">
          <AnimatePresence className="nav-list__item">
            {links.map((link) => (
              <motion.li key={link.path} className="nav-list__item">
                <MotionLink
                  className={`nav-list__link ${
                    location.pathname === link.path
                      ? "nav-list__link--active"
                      : ""
                  }`}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      className="active-background"
                      {...(isTabletOrDesktop && {
                        layoutId: "activeBackground",
                        transition: spring,
                      })}
                    />
                  )}
                </MotionLink>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
