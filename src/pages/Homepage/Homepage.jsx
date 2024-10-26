import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Homepage;
