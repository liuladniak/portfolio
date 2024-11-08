import "./About.scss";
import myPhoto from "../../assets/images/liu2024pp-1x1.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="about__desc">
        <h2 className="about__heading">About Me</h2>
        <div className="about__content">
          <p className="about__content-part">
            As an <span className="highlight"> engineer</span> at heart, I focus
            on creating clean, efficient, and high-quality{" "}
            <span className="highlight">solutions</span>. My tech journey began
            over <span className="highlight">four years</span> ago, working with
            local businesses and startups to bring their visions to life. This
            experience inspired me to deepen my technical skills, leading me to
            dive deep into <span className="highlight">full stack</span>{" "}
            development and earn a{" "}
            <span className="highlight">Software Engineering</span> diploma.
          </p>
          <p className="about__content-part">
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
        </div>
      </div>
      <div className="about__photo">
        <img src={myPhoto} alt="photo of myself" />
      </div>
    </section>
  );
};

export default About;
