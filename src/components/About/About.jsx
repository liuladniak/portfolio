import "./About.scss";
import myPhoto from "../../assets/images/liu2024pp-1x1.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="about__desc">
        <h2 className="about__heading">About Me</h2>
        <div className="about__content">
          <p className="about__content-part">
            As an engineer at heart, I focus on creating clean, efficient, and
            high-quality solutions. My journey began over four years ago,
            working with local companies and startups to bring their visions to
            life. This experience inspired me to deepen my technical skills,
            leading me to dive deep into full stack development and earn a
            Software Engineering diploma.
          </p>
          <p className="about__content-part">
            Working at BrainStation, I expanded my skills in leadership, product
            management, and communication. Conducting code reviews and providing
            constructive feedback allowed me to gain hands-on experience with
            Agile practices while helping others achieve their technical goals.
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
