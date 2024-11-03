import "../HeroHome/HeroHome.scss";
import "./HeroProjects.scss";

const HeroProjects = () => {
  return (
    <section className="hero">
      <div className="hero__col">
        <h1 className="hero__heading">Projects</h1>
      </div>
      <div className="hero__col">
        <p className="hero__desc hero__desc--projects">
          Discover my projects that highlight my technical expertise and
          dedication to solving development challenges with effective,
          user-focused solutions.
        </p>
      </div>
    </section>
  );
};

export default HeroProjects;
