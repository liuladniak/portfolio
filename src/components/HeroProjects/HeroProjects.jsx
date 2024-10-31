import "../HeroHome/HeroHome.scss";
import "./HeroProjects.scss";

const HeroProjects = () => {
  return (
    <section className="hero">
      <div className="hero__col">
        <h1 className="hero__heading">Projects!</h1>
      </div>
      <div className="hero__col">
        <p className="hero__desc hero__desc--projects">
          Explore a selection of my work, showcasing how I approach design
          challenges. Each project reflects my commitments to creating
          user-centered experiences that blend functionality with aesthetic
          appeal.
        </p>
      </div>
    </section>
  );
};

export default HeroProjects;
