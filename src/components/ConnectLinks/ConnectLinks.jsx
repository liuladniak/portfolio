import "./ConnectLinks.scss";
import linkedIcon from "../../assets/icons/linkedIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import EmailIcon from "../Icons/EmailIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";

const ConnectLinks = () => {
  return (
    <div className="connect-links">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/liuladniak/"
        className="btn btn--connect btn--connect-about"
      >
        <LinkedInIcon />
        <span>LinkedIn</span>
      </a>

      <a
        target="_blank"
        href="mailto:liuladniak@gmail.com"
        className="btn btn--connect btn--connect-about"
      >
        <EmailIcon />
        <span>Email</span>
      </a>
    </div>
  );
};

export default ConnectLinks;
