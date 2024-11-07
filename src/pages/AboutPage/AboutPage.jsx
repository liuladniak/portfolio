import HeroAbout from "../../components/HeroAbout/HeroAbout";
import "./AboutPage.scss";
import aboutImg1 from "../../assets/images/aboutImg1.jpg";

import ConnectLinks from "../../components/ConnectLinks/ConnectLinks";

const AboutPage = () => {
  return (
    <>
      <HeroAbout />
      <div className="about-layout">
        <div className="about-card about-card--1">
          <h2 className="about-card__heading">My Journey</h2>

          <p className="about-card__desc">
            I began my career with an engineering background, building a strong
            foundation in problem-solving and analytical thinking. As I
            transitioned into web development, I discovered a passion for
            creating efficient, high-quality web applications. Over time, I've
            worked on a wide range of projects - from front-end interfaces to
            full-stack applications - where my strong debugging skills and
            attention to detail have been invaluable in delivering reliable,
            polished results.
          </p>
          <p className="about-card__desc">
            Throughout my career, I’ve been driven by the belief that clean code
            and thoughtful design are essential for a great user experience. My
            approach is focused on transforming complex requirements into
            seamless, intuitive interfaces that meet user needs and align with
            business goals.
          </p>
        </div>
        <div className="about-card about-card--2">
          <img src={aboutImg1} alt="image" />
        </div>
        <div className="about-card about-card--3">
          <ConnectLinks />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
