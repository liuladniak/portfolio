import HeroConnect from "../../components/HeroConnect/HeroConnect";
import "./ConnectPage.scss";

import ConnectLinks from "../../components/ConnectLinks/ConnectLinks";

const ConnectPage = () => {
  return (
    <section className="connect">
      <HeroConnect />
      <ConnectLinks />
      {/* <div className="connect-links">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/liuladniak/"
          className="btn btn--connect"
        >
          <img
            className="btn__icon"
            src={linkedIcon}
            alt="linkedin logo icon"
          />
          <span>LinkedIn</span>
        </a>

        <a
          target="_blank"
          href="mailto:liuladniak@gmail.com"
          className="btn btn--connect"
        >
          <img className="btn__icon" src={emailIcon} alt="Mail icon" />
          <span>Email</span>
        </a>
      </div> */}
    </section>
  );
};

export default ConnectPage;
