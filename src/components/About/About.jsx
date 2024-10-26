import "./About.scss";
import myPhoto from "../../assets/images/liu2024pp-1x1.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="about__desc">
        <h2 className="about__heading">About Me</h2>
        <div className="about__content">
          <p className="about__content-part">
            I’m a UI/UX designer with a passion for solving complex problems
            through intuitive design. My journey started 5 years ago, and since
            then, I've worked with startups and established brands to bring
            their visions to life.
          </p>
          <p className="about__content-part">
            Over the years, I've had the privilege of working with companies
            like ShopEase, FinTrack, and Insightly, focusing on user-centric
            design solutions.
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
