import "./HeroHome.scss";
import liuImg from "../../assets/logos/liu.png";

const HeroHome = () => {
  return (
    <section className="hero">
      <div className="hero__col hero__col-icon">
        <h1 className="hero__heading">
          Hi, I'm <span className="bold">Liu</span>!
        </h1>
        <div className="liu-icon--hero">
          <img className="liu-icon" src={liuImg} alt="Liu's icon" />
        </div>
      </div>
      <div className="hero__col">
        <p className="hero__desc">
          A <span className="bold">Software Engineer</span> based in 🇺🇸. With
          over
          <span className="bold"> 4 years of experience</span>, I specialize in
          creating clean, high quality solutions and user-friendly applications.
        </p>
      </div>
    </section>
  );
};

export default HeroHome;
