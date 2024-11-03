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
        <a
          target="_blank"
          href="https://github.com/liuladniak"
          className="btn btn--connect"
        >
          <img className="btn__icon" src={githubIcon} alt="github logo icon" />
          <span>Github</span>
        </a>
        <a
          target="_blank"
          href="https://dribbble.com/"
          className="btn btn--connect"
        >
          <img
            className="btn__icon"
            src={dribbleIcon}
            alt="linkedin logo icon"
          />
          <span>Dribble</span>
        </a>
      </di>
    </>
  );
};

export default ConnectPage;
