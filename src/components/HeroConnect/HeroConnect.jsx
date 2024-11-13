import "../HeroHome/HeroHome.scss";
import "./HeroConnect.scss";
import liuImg from "../../assets/logos/liu4.png";
const HeroConnect = () => {
  return (
    <>
      <section className="hero hero--connect">
        <div className="hero__col hero__col-icon">
          <h1 className="hero__heading hero__heading--connect bold">Connect</h1>
          <div className="liu-icon--connect">
            <img className="liu-icon" src={liuImg} alt="Liu's icon" />
          </div>
        </div>
        <div className="hero__col">
          <p className="hero__desc hero__desc--connect">
            I’m currently open to new opportunities and collaborations. Whether
            you’re looking to start a project or just want to chat, feel free to
            reach out.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroConnect;
