import HeroConnect from "../../components/HeroConnect/HeroConnect";
import "./ConnectPage.scss";
import linkedIcon from "../../assets/icons/linkedIcon.svg";
import githubIcon from "../../assets/icons/githubIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import dribbleIcon from "../../assets/icons/dribbleIcon.svg";

const ConnectPage = () => {
  return (
    <>
      <HeroConnect />
      <di className="connect-links">
        <button className="btn btn--connect">
          <img
            className="btn__icon"
            src={linkedIcon}
            alt="linkedin logo icon"
          />
          <span>LinkedIn</span>
        </button>
        <button className="btn btn--connect">
          <img
            className="btn__icon"
            src={githubIcon}
            alt="linkedin logo icon"
          />
          <span>Github</span>
        </button>
        <button className="btn btn--connect">
          <img className="btn__icon" src={emailIcon} alt="linkedin logo icon" />
          <span>Email</span>
        </button>
        <button className="btn btn--connect">
          <img
            className="btn__icon"
            src={dribbleIcon}
            alt="linkedin logo icon"
          />
          <span>Dribble</span>
        </button>
      </di>
    </>
  );
};

export default ConnectPage;
