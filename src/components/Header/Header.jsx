import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  const spring = {
    type: "spring",
    stiffness: 600,
    damping: 35,
  };

  const MotionLink = motion(Link);

  return (
    <header className={`header ${isScrolled ? "" : "solid-header"}`}>
      <nav className="nav">
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
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeBackground"
                      transition={spring}
                      className="active-background"
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
