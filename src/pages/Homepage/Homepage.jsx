import "./Homepage.scss";

import About from "../../components/About/About";
import HeroHome from "../../components/HeroHome/HeroHome";
import ProjectsList from "../../components/ProjectsList/ProjectsList";

const Homepage = () => {
  return (
    <>
      <HeroHome />
      <About />
      <ProjectsList />
    </>
  );
};

export default Homepage;
