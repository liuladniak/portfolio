import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import "./Project.scss";
import arrowIcon from "../../assets/icons/arrowIcon.svg";

import { Link, useNavigate } from "react-router-dom";
import ProjectLinks from "../ProjectLinks/ProjectLinks";

const Project = ({ projectData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
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
              <p className="project__subheading">{projectData.subtitle}</p>
            </div>
            <div className="project__link">
              <img
                className="project__link-icon"
                src={arrowIcon}
                alt="Arrow right icon"
              />
            </div>
          </Link>
          <ProjectLinks projectData={projectData} />
          <Link to="/projects">{projectData.description}</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
