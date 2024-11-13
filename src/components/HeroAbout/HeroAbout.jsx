import "./HeroAbout.scss";
import liuImg from "../../assets/logos/liu2.png";

const HeroAbout = () => {
  return (
    <section className="hero hero--about">
      <div className="hero__col hero__col-icon">
        <h1 className="hero__heading hero__heading--about">
          <span className="bold">About</span> Liu
        </h1>
        {/* <div className="liu-icon--about">
          <img className="liu-icon" src={liuImg} alt="Liu's icon" />
        </div> */}
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
