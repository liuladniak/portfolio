import "./About.scss";
import myPhoto from "../../assets/images/liu2024pp-1x1.jpg";
import { useState } from "react";
import ArrowUp from "../Icons/ArrowUp";
import ArrowDown from "../Icons/ArrowDown";
import useResponsive from "../../hooks/useResponsive";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isTabletOrDesktop = useResponsive(768);

  const tandleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className="about">
      <div className="about__desc">
        <h2 className="about__heading">About Me</h2>
        <div className="about__content">
          <div className="about__content-part">
            {!isTabletOrDesktop && (
              <div className="about__photo about__photo--mobile">
                <img src={myPhoto} alt="photo of myself" />
              </div>
            )}
            As an <span className="highlight"> engineer</span> at heart, I focus
            on creating clean, efficient, and high-quality{" "}
            <span className="highlight">solutions</span>. My tech journey began
            over <span className="highlight">four years</span> ago, working with
            local businesses and startups to bring their visions to life. This
            experience inspired me to deepen my technical skills, leading me to
            dive deep into <span className="highlight">full stack</span>{" "}
            development and earn a{" "}
            <span className="highlight">Software Engineering</span> diploma.
          </div>

          <p
            className={`about__content-part about__content-part--2 
                ${
                  !isTabletOrDesktop && !isExpanded
                    ? "about__content-part--hidden"
                    : ""
                }
              
              `}
          >
            <span className="highlight">Working at BrainStation</span>, I
            expanded my skills in leadership,{" "}
            <span className="highlight">product management</span>, and
            communication. Conducting code reviews and providing constructive
            feedback allowed me to gain{" "}
            <span className="highlight">hands-on experience with Agile</span>{" "}
            practices while helping others achieve their technical goals.
            Through collaborative <span className="highlight">teamwork</span>,
            I've learned to adapt and contribute effectively, ensuring
            successful project outcomes.
          </p>

          {!isTabletOrDesktop && (
            <button onClick={tandleToggle} className="btn--read-more">
              {isExpanded ? (
                <span className="read-more__btn-content">
                  Read Less
                  <ArrowUp />
                </span>
              ) : (
                <span className="read-more__btn-content">
                  Read More
                  <ArrowDown />
                </span>
              )}
            </button>
          )}
        </div>
      </div>
      {isTabletOrDesktop && (
        <div className="about__photo">
          <img src={myPhoto} alt="photo of myself" />
        </div>
      )}
    </section>
  );
};

export default About;
