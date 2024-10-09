import "./Projects.scss";
import Project from "../Project/Project";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      img: "../../assets/project1.jpg",
      title: "Project title",
      description: "Project description",
      technologies: ["React.js", "Node.js"],
    },
  ];
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-list">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
