import "./Project.scss";
import arrowIcon from "../../assets/icons/arrowIcon.svg";
import flagIcon from "../../assets/icons/flag.svg";

const Project = ({ projectData }) => {
  return (
    <div className="project">
      <div className="project__col">
        <div className="project__img">
          <img
            src={projectData.img}
            alt="Image of the landing page of the project"
          />
        </div>
      </div>
      <div className="project__desc">
        <div>
          <div className="project__col-header">
            <h2 className="project__heading">CityGo</h2>
            <div className="project__link">
              <img src={arrowIcon} alt="Arrow right icon" />
            </div>
          </div>
          <div>
            <span className="project__icon">{projectData.icon}</span>
          </div>
          <p>{projectData.description}</p>{" "}
        </div>
        <ul className="project__stack">
          <li className="project__stack-el">Mobile</li>
          <li className="project__stack-el">Application</li>
          <li className="project__stack-el">E-Commerce</li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
