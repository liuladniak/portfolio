import "./ProjectsList.scss";
import Project from "../Project/Project";
import project1Img from "../../assets/images/Homepage.png";
import project2Img from "../../assets/images/Local Gardens Homepage.png";
import project3Img from "../../assets/images/sunsetpizza.png";
import project4Img from "../../assets/images/citygo-dashboard1.png";
import videoProject1 from "../../assets/videos/video-project1.mov";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      pageRoute: "/city-go",
      img: project1Img,
      video: videoProject1,
      title: "CityGo",
      subtitle: "Travel booking app",
      description:
        "Developed a SaaS-based analytics dashboard for Insightly, focusing on providing actionable insights through a user-centric design. The dashboard improved data accessibility and was adopted by 80% of users within the first three months.",
      stack: ["React.js", "SASS", "Node.js", "PostgreSQL"],
      github: "https://github.com/liuladniak/citygo",
      live: "https://citygo.liuladniak.io/",
    },
    {
      id: 2,
      pageRoute: "/citygo-dashboard",
      img: project4Img,
      video: videoProject1,
      title: "CityGo Dashboard",
      subtitle: "Admin management system",
      description:
        "Developed a SaaS-based analytics dashboard for Insightly, focusing on providing actionable insights through a user-centric design. The dashboard improved data accessibility and was adopted by 80% of users within the first three months.",
      stack: ["React.js", "SASS", "Node.js", "PostgreSQL"],
      github: "https://github.com/liuladniak/citygo",
      live: "https://citygo-dashboard.liuladniak.io/",
    },
    {
      id: 3,
      img: project3Img,
      title: "Sunset Pizza & Grill",
      subtitle: "Pizza Shop",
      description: "Project description",
      stack: ["HTML5", "CSS3", "JavaScript ES6", "Responsive web design"],
      github: "https://github.com/liuladniak/travel-booking-app--user",
      live: "https://sunset-pizza-shop.netlify.app/",
    },
    {
      id: 4,
      img: project2Img,
      title: "Local Gardens",
      subtitle: "Decor Store",
      description: "Project description",
      stack: ["React.js", "Node.js"],
      github: "https://github.com/liuladniak/local-gardens",
      live: "https://local-gardens.netlify.app/",
    },
  ];
  return (
    <section id="projects" className="projects">
      <div className="projects-list">
        {projectsData.map((projectData) => {
          return <Project key={projectData.id} projectData={projectData} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
