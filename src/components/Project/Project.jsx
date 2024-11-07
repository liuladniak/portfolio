import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import "./Project.scss";
import arrowIcon from "../../assets/icons/arrowIcon.svg";
import iconGithub from "../../assets/icons/github.svg";
import iconLaptop from "../../assets/icons/laptop.svg";
import { Link } from "react-router-dom";

const Project = ({ projectData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="project"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="project">
        <div className="project__col">
          <Link to="/projects" className="project__img">
            <img
              src={projectData.img}
              alt="Image of the landing page of the project"
            />
          </Link>
          <ul className="project__stack">
            {projectData.stack.map((technology, i) => {
              return (
                <li className="project__stack-el" key={i}>
                  {technology}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="project__desc">
          <Link to="/projects" className="project__desc-header">
            <div className="project__header">
              <h2 className="project__heading">{projectData.title}</h2>
              <Link to="/projects" className="project__link">
                <img
                  className="project__link-icon"
                  src={arrowIcon}
                  alt="Arrow right icon"
                />
              </Link>
            </div>
            <p className="project__subheading">{projectData.subtitle}</p>
          </Link>
          <div className="project__icons">
            {projectData.github && (
              <Link to={projectData.github} target="_blank">
                <img src={iconGithub} className="project__icon" />
                <span className="project__icon-alt">Github repo</span>
              </Link>
            )}
            {projectData.live && (
              <Link to={projectData.live} target="_blank">
                <img src={iconLaptop} className="project__icon" />
                <span className="__icon-alt">View live</span>
              </Link>
            )}
          </div>
          <Link to="/projects">{projectData.description}</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
