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
      description:
        "Developed a SaaS-based analytics dashboard for Insightly, focusing on providing actionable insights through a user-centric design. The dashboard improved data accessibility and was adopted by 80% of users within the first three months.",
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
  ];
  return (
    <section id="projects" className="projects">
      {/* <h2>Projects</h2> */}
      <div className="projects-list">
        {projectsData.map((projectData) => {
          return <Project key={projectData.id} projectData={projectData} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
