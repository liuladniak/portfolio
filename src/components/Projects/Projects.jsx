import "./Projects.scss";
import Project from "../Project/Project";
import project1Img from "../../assets/images/All-tours-page.png";
import project2Img from "../../assets/images/Local Gardens Homepage.png";
import project3Img from "../../assets/images/PizzaShop.png";
import videoProject1 from "../../assets/videos/video-project1.mov";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      pageRoute: "/city-go",
      img: project1Img,
      video: videoProject1,
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
    },
    // {
    //   id: 4,
    //   img: project3Img,
    //   title: "Instock / Dashboard",
    //   description: "Project description",
    //   technologies: ["React.js", "Node.js"],
    //   github: "https://github.com/liuladniak/instock",
    //   live: "https://sunset-pizza-shop.netlify.app/",
    //   live2: "https://sunset-shop.netlify.app/",
    // },
    // {
    //   id: 5,
    //   img: project3Img,
    //   title: "Brainflix",
    //   description: "Project description",
    //   technologies: ["React.js", "Node.js"],
    //   github: "https://github.com/liuladniak/brainflix",
    //   live: "https://sunset-pizza-shop.netlify.app/",
    //   live2: "https://sunset-shop.netlify.app/",
    // },
  ];
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-list">
        {projectsData.map((projectData) => {
          return <Project key={projectData.id} projectData={projectData} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
