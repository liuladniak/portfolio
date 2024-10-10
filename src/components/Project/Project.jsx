import "./Project.scss";
import project1 from "../../assets/images/All-tours-page.png";
import { Link } from "react-router-dom";
import githubIcon from "../../assets/icons/github.png";
import laptopIcon from "../../assets/icons/laptop.webp";

const Project = () => {
  return (
    <article className="project-card">
      <div className="project-card-img">
        <img className="project-image" src={project1} alt="project thumbnail" />
      </div>
      <div className="project-card-text">
        <a className="project-title-link" href="https://city-go.netlify.app/">
          <h3>Travel booking app</h3>
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores totam
          magnam quibusdam. Laudantium harum, assumenda ipsam, sed vel numquam
          perspiciatis odit beatae ipsa incidunt tempora asperiores natus. Enim,
          sequi fugiat?
        </p>
        <div className="project-links">
          <a href="" className="project-resource">
            <img
              src={githubIcon}
              alt="github logo icon"
              className="resource-icon"
            />
            <span>Github</span>
          </a>
          <a href="" className="project-resource">
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
