import "../HeroHome/HeroHome.scss";
import "./HeroConnect.scss";

const HeroConnect = () => {
  return (
    <section className="hero">
      <div className="hero__col">
        <h1 className="hero__heading">Connect</h1>
      </div>
      <div className="hero__col">
        <p className="hero__desc hero__desc--connect">
          I’m currently open to new opportunities and collaborations. Whether
          you’re looking to start a project or just want to chat, feel free to
          reach out.
        </p>
      </div>
    </section>
  );
};

export default HeroConnect;
