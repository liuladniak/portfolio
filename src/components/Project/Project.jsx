import "./Project.scss";
import project1 from "../../assets/project1.jpg";

const Project = () => {
  return (
    <article className="project-card">
      <div className="project-card-img">
        <img src={project1} alt="project thumbnail" />
      </div>
      <div className="project-card-text">
        <h3>Project 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores totam
          magnam quibusdam. Laudantium harum, assumenda ipsam, sed vel numquam
          perspiciatis odit beatae ipsa incidunt tempora asperiores natus. Enim,
          sequi fugiat?
        </p>
        <div className="project-links">
          <a href="">Live</a>
          <a href="">Github</a>
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
