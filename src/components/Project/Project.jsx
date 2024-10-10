import "./Project.scss";
import project1 from "../../assets/images/All-tours-page.png";
import { Link } from "react-router-dom";
import githubIcon from "../../assets/icons/github.png";
import laptopIcon from "../../assets/icons/laptop.png";

const Project = ({ projectsData }) => {
  console.log(projectsData.title);
  return (
    <article className="project-card">
      <div className="project-card-img">
        <img
          className="project-image"
          src={projectsData.img}
          alt="project thumbnail"
        />
      </div>
      <div className="project-card-text">
        <h3>{projectsData.title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores totam
          magnam quibusdam. Laudantium harum, assumenda ipsam, sed vel numquam
          perspiciatis odit beatae ipsa incidunt tempora asperiores natus. Enim,
          sequi fugiat?
        </p>
        <div className="project-links">
          <a href={projectsData.github} className="project-resource">
            <img
              src={githubIcon}
              alt="github logo icon"
              className="resource-icon"
            />
            <span>Github</span>
          </a>
          <a href={projectsData.live} className="project-resource">
            <img src={laptopIcon} alt="laptop icon" className="resource-icon" />
            <span>Live</span>
          </a>
        </div>
        <div className="project-tech">
          <h3>Technologies used:</h3>
          <ul className="project-tech-list">
            <li>React.js</li>
            <li>Typescript</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>Knex.js</li>
            <li>Stripe</li>
            <li>SASS</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Project;
