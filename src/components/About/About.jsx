import "./About.scss";
import imgHero from "../../assets/img-hero.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-brief">
        {/* <div className="hero-img">
          <img src={imgHero} alt="illustration of a woman" />
        </div> */}
        <div className="about-text">
          <div className="about-heading">
            <h1 className="about-heading--main">Liu Ladniak</h1>
            <h2 className="about-heading--title">Full-Stack Developer</h2>
            <h3 className="about-heading--location">USA & Canada</h3>
          </div>

          <div>
            <p className="about-desc">
              Hi there 👋 I'm Liu and I'm a Full-Stack Developer with a love for
              creating clean, high quality solutions and user-friendly
              applications.
            </p>
          </div>

          <div className="about-socials">
            <a href="https://github.com/liuladniak">
              <h2>Github</h2>
            </a>
            <a href="https://www.linkedin.com/in/liuladniak/">
              <h2>LinkedIn</h2>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="hero-img">
        <img src={imgHero} alt="illustration of a woman" />
      </div> */}
      <div className="about-main">
        <div className="about-left">
          <h2 className="about-title">About</h2>
          <p>
            As an engineer at heart, I focus on creating clean, efficient, and
            high-quality web solutions. My strong problem-solving skills and
            commitment to writing reliable, maintainable code enable me to
            deliver web applications that meet user needs and business goals.
          </p>
        </div>

        <div className="about-right">
          <h2 className="about-title">Skills</h2>
          <ul className="about-skills">
            <li>React</li>
            <li>TypeScript</li>
            <li>AWS</li>
            <li>Azure</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Tailwind</li>
            <li>Redux</li>
            <li>Github</li>
            <li>Next.js</li>
            <li>Gitflow</li>
            <li>JIRA</li>
            <li>Agile</li>
            <li>Node.JS</li>
            <li>Express.JS</li>
            <li>MYSQL</li>
            <li>PostgreSQL</li>
            <li>KNEX</li>
            <li>Jest</li>
            <li>Auth</li>
            <li>REST API</li>
            <li>Figma</li>
            <li>Stripe</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
