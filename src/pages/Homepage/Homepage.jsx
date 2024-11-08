import "./Homepage.scss";

import About from "../../components/About/About";
import HeroHome from "../../components/HeroHome/HeroHome";
import ProjectsList from "../../components/ProjectsList/ProjectsList";

const Homepage = () => {
  return (
    <div className="homepage">
      <HeroHome />
      <About />
      <ProjectsList />
    </div>
  );
};

export default Homepage;
