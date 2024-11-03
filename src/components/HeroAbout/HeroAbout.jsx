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
          With over 4 years of experience, I specialize in building
          user-centered projects that emphasize both design and functionality,
          leveraging my strong debugging skills.
        </p>
      </div>
    </section>
  );
};

export default HeroAbout;
