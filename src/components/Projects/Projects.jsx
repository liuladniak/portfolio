import "./Projects.scss";
import Project from "../Project/Project";
import project1Img from "../../assets/images/All-tours-page.png";
import project2Img from "../../assets/images/Local Gardens Homepage.png";
import project3Img from "../../assets/images/PizzaShop.png";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      img: project1Img,
      title: "CityGo / Travel booking app",
      description: "Project description",
      technologies: ["React.js", "Node.js"],
      github: "https://github.com/liuladniak/travel-booking-app--user",
      live: "https://city-go.netlify.app/",
    },
    {
      id: 2,
      img: project2Img,
      title: "Local Gardens / Decor Store",
      description: "Project description",
      technologies: ["React.js", "Node.js"],
      github: "https://github.com/liuladniak/local-gardens",
      live: "https://local-gardens.netlify.app/",
    },

    {
      id: 3,
      img: project3Img,
      title: "Sunset Pizza & Grill / Pizza Shop",
      description: "Project description",
      technologies: ["React.js", "Node.js"],
      github: "https://github.com/liuladniak/travel-booking-app--user",
      live: "https://sunset-pizza-shop.netlify.app/",
      live2: "https://sunset-shop.netlify.app/",
    },
  ];
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-list">
        {projectsData.map((projectData) => {
          return <Project key={projectData.id} projectData={projectData} />;
        })}

        <Project projectsData={projectsData[0]} />
        <Project projectsData={projectsData[1]} />
        <Project projectsData={projectsData[2]} />
        {/* <Project />
        <Project />
        <Project /> */}
      </div>
    </section>
  );
};

export default Projects;
