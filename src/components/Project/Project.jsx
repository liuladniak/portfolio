import "./Project.scss";

const Project = ({ projectData }) => {
  return (
    <div className="project">
      <div className="project__thumbnail">
        <h2>CityGo</h2>
        <div>
          <img
            src={projectData.img}
            alt="image of the landing page of the project"
          />
        </div>
        <ul>
          <li>Mobile</li>
          <li>Application</li>
          <li>E-Commerce</li>
        </ul>
      </div>
      <div className="project__desc">
        <p>{projectData.description}</p>
      </div>
    </div>
  );
};

export default Project;
