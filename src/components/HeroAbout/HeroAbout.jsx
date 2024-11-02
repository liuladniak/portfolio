import "./HeroAbout.scss";

const HeroAbout = () => {
  return (
    <section className="hero">
      <div className="hero__col">
        <h1 className="hero__heading">
          <span className="bold">About</span> Liu
        </h1>
      </div>
      <div className="hero__col">
        <p className="hero__desc hero__desc--about">
          With 5+ years in design, I've worked on diverse projects, from mobile
          apps to web platforms, focusing on user-centered designs that are both
          visually appealing and practical.
        </p>
      </div>
    </section>
  );
};

export default HeroAbout;
