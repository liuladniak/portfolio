import "./HeroHome.scss";

const HeroHome = () => {
  return (
    <section className="hero">
      <div className="hero__col">
        <h1 className="hero__heading">
          Hi, I'm <span className="bold">Liu</span>!
        </h1>
      </div>
      <div className="hero__col">
        <p className="hero__desc">
          a <span className="bold">Software Engineer</span> based in{" "}
          <span className="bold">Toronto</span>. With over
          <span className="bold"> 4 years of experience</span>, I specialize in
          creating clean, high quality solutions and user-friendly applications.
        </p>
      </div>
    </section>
  );
};

export default HeroHome;
