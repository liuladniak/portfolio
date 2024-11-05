// import { useContext, useEffect, useState } from "react";
// import {
//   AnimatePresence,
//   motion,
//   MotionValue,
//   useMotionValue,
//   useTransform,
// } from "framer-motion";
// import "./Header.scss";
// import darkTheme from "../../assets/icons/dark-theme.svg";
// import logoImg from "../../assets/logos/logo1.png";
// import { ThemeContext } from "../../contexts/ThemeContext";
// import { Link, useLocation } from "react-router-dom";
// import { li } from "framer-motion/client";

// const Header = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [activeLink, setActiveLink] = useState("home");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOn, setIsOn] = useState(false);
//   const location = useLocation();
//   const toggleSwitch = () => setIsOn(!isOn);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const spring = {
//     type: "spring",
//     stiffness: 700,
//     damping: 30,
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const links = [
//     { path: "/", name: "Home" },
//     {
//       path: "/about",
//       name: "About",
//     },
//     {
//       path: "/projects",
//       name: "Projects",
//     },
//     {
//       path: "/connect",
//       name: "Connect",
//     },
//   ];
//   const MotionLink = motion(Link);

//   const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
//     const INPUT_RANGE = inputUpper - inputLower;
//     const OUTPUT_RANGE = outputUpper - outputLower;

//     return (value) =>
//       outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
//   };

//   const setTransform = (item, event, x, y) => {
//     const bounds = item.getBoundingClientRect();
//     const relativeX = event.clientX - bounds.left;
//     const relativeY = event.clientY - bounds.top;
//     const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
//     const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
//     x.set(xRange * 10);
//     y.set(yRange * 10);
//   };
//   return (
//     <header className={`header ${isScrolled ? "" : "solid-header"}`}>
//       <nav className="nav">
//         <ul className="nav-list">
//           <AnimatePresence>
//             {links.map((link) => {
//               const x = useMotionValue(0);
//               const y = useMotionValue(0);
//               const textX = useTransform(x, (latest) => latest * 2);
//               const textY = useTransform(y, (latest) => latest * 2);
//               return (
//                 <motion.li
//                   onPointerMove={(event) => {
//                     const item = event.currentTarget;
//                     setTransform(item, event, x, y);
//                   }}
//                   key={link.path}
//                   onPointerLeave={(event) => {
//                     x.set(0);
//                     y.set(0);
//                   }}
//                   style={{ x, y }}
//                 >
//                   <MotionLink
//                     className={`nav-list__item ${
//                       location.pathname === link.path
//                         ? "nav-list__item--active"
//                         : ""
//                     }`}
//                     to={link.path}
//                   >
//                     <motion.span
//                       style={{ x: textX, y: textY }}
//                       className="animation-span"
//                     >
//                       {link.name}
//                     </motion.span>
//                     {location.pathname === link.path ? (
//                       <motion.div
//                         transition={spring}
//                         layoutId="underline"
//                         className="animation-el"
//                       ></motion.div>
//                     ) : null}
//                   </MotionLink>
//                 </motion.li>
//               );
//             })}
//           </AnimatePresence>

//           <li>
//             <li className="nav-list__item">
//               <div className="dark-theme" onClick={toggleTheme}>
//                 <img src={darkTheme} alt="icon of a moon with stars" />
//               </div>
//             </li>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Header.scss";
import darkTheme from "../../assets/icons/dark-theme.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
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

          {/* <li className="nav-list__item">
            <div className="dark-theme" onClick={toggleTheme}>
              <img src={darkTheme} alt="icon of a moon with stars" />
            </div>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
