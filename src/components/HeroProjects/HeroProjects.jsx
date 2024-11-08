import "../HeroHome/HeroHome.scss";
import "./HeroProjects.scss";
import liuImg from "../../assets/logos/liu3.png";

const HeroProjects = () => {
  return (
    <section className="hero">
      <div className="hero__col hero__col-icon">
        <h1 className="hero__heading hero__heading--projects">
          Liu's <span className="bold">Projects</span>
        </h1>
        <div className="liu-icon--projects">
          <img className="liu-icon" src={liuImg} alt="Liu's icon" />
        </div>
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
