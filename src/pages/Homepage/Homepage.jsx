import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import "./Homepage.scss";

const Homepage = () => {
  const heroContent = [
    {
      heading: `Hi, I'm <span className="bold">Liu</span>!`,
      desc: `a <span className="bold">Software Engineer</span> based in
          <span className="bold">Toronto</span>. With over
          <span className="bold">3 years of experience</span>, I specialize in
          creating clean, high quality solutions and user-friendly applications.`,
    },
    {
      heading: `<span className="bold">Projects</span>`,
      desc: "Explore a selection of my work, showcasing how I approach design challenges. Each project reflects my commitment to creating user-centered experiences that blend functionality with aesthetic appeal.",
    },
    {
      heading: `<span className="bold">About</span> Liu`,
      desc: "With 5+ years in design, I've worked on diverse projects, from mobile apps to web platforms, focusing on user-centered designs that are both visually appealing and practical.",
    },
    {
      heading: `<span className="bold">Connect</span>`,
      desc: "I’m always open to new opportunities and collaborations. Whether you’re looking to start a project or just want to chat, feel free to reach out.",
    },
  ];

  return (
    <>
      <Hero />
      <About />
      <ProjectsList />
    </>
  );
};

export default Homepage;
