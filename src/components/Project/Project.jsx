import "./Project.scss";
import arrowIcon from "../../assets/icons/arrowIcon.svg";
import flagIcon from "../../assets/icons/flag.svg";

import iconGithub from "../../assets/icons/github.svg";
import iconLaptop from "../../assets/icons/laptop.svg";
import { Link } from "react-router-dom";

const Project = ({ projectData }) => {
  console.log(projectData);
  return (
    <div className="project">
      <div className="project__col">
        <div className="project__img">
          <img
            src={projectData.img}
            alt="Image of the landing page of the project"
          />
        </div>
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
        <div className="project__desc-header">
          <div className="project__header">
            <h2 className="project__heading">{projectData.title}</h2>
            <div className="project__link">
              <img src={arrowIcon} alt="Arrow right icon" />
            </div>
          </div>
          <p className="project__subheading">{projectData.subtitle}</p>
        </div>
        <div className="project__icons">
          <Link to={projectData.github}>
            <img src={iconGithub} className="project__icon" />
            <span className="project__icon-alt">Github repo</span>
          </Link>
          <Link to={projectData.live}>
            <img src={iconLaptop} className="project__icon" />
            <span className="__icon-alt">View live</span>
          </Link>
        </div>
        <p>{projectData.description}</p>
      </div>
    </div>
  );
};

export default Project;
