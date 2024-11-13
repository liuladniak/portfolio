import "./ProjectsList.scss";
import Project from "../Project/Project";
import project1Img from "../../../public/citygo-cropped.png";
import project2Img from "../../../public/LG-cropped.png";
import project3Img from "../../../public/PizzaShop-cropped.png";
import project4Img from "../../../public/dashboard1.png";
import videoProject1 from "../../assets/videos/video-project1.mp4";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      slug: "citygo",
      pageRoute: "/city-go",
      img: project1Img,
      video: videoProject1,
      title: "CityGo",
      subtitle: "Travel booking app",
      description:
        "A city tour booking app with features like user authentication, tour search & filtering, interactive map, and a custom calendar. Users can manage bookings through a shopping cart, all within a responsive, user-friendly design.",
      stack: ["React.js", "SASS", "Node.js", "PostgreSQL", "JWT Auth"],
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
        "An admin interface for managing CityGo’s tours, bookings, and users. Features include secure authentication, data visualization, and tools for efficient tour schedule and booking management.",
      stack: ["React.js", "Typescript", "SASS", "Node.js", "PostgreSQL"],
      github: "https://github.com/liuladniak/citygo",
    },
    {
      id: 3,

      img: project3Img,
      title: "Sunset Pizza & Grill",
      subtitle: "Pizza Shop",
      description:
        "A responsive website built using fundamental tools - HTML5, CSS3, and ES6 JavaScript. Showcasing a carousel and tabbed menu, this design brings the business vision to life with engaging visuals and an intuitive user experience.",
      stack: ["HTML5", "CSS3", "JavaScript ES6", "Responsive web design"],
      github: "https://github.com/liuladniak/travel-booking-app--user",
      live: "https://sunset-pizza-shop.netlify.app/",
    },
    {
      id: 4,

      img: project2Img,
      title: "Local Gardens",
      subtitle: "Decor Store",
      description:
        "An e-commerce site for decor lovers, offering a wide range of products to enhance any space. Users can explore categories, view details, and make secure purchases, all with a clean, inspiring design focused on beautiful home transformations.",
      stack: ["React.js", "SASS"],
    },
  ];
  return (
    <section id="projects" className="projects">
      <h2 className="projects__heading">Projects</h2>
      <div className="projects-list">
        {projectsData.map((projectData) => {
          return <Project key={projectData.id} projectData={projectData} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
