import HeroAbout from "../../components/HeroAbout/HeroAbout";
import "./AboutPage.scss";
import aboutImg1 from "../../assets/images/aboutImg1.jpg";
import aboutImg2 from "../../assets/images/aboutImg2.png";
import aboutImg3 from "../../assets/images/aboutImg3.png";
import aboutImg4 from "../../assets/images/aboutImg4.png";

const AboutPage = () => {
  return (
    <>
      <HeroAbout />
      <div className="about-layout">
        <div className="about-card about-card--1">
          <h2 className="about-card__heading">My Journey</h2>

          <p className="about-card__desc">
            I began my career with a degree in Graphic Design from the
            University of California, Berkeley, where I discovered my love for
            user experience. Since then, I’ve worked with various startups and
            established companies, helping them transform their digital presence
            and improve user engagement.
          </p>
          <p className="about-card__desc">
            Throughout my career, I’ve been driven by the belief that great
            design is the result of a deep understanding of both the user and
            the problem at hand. I specialize in taking complex ideas and
            translating them into intuitive, easy-to-use interfaces.
          </p>
        </div>
        <div className="about-card about-card--2">
          <img src={aboutImg1} alt="image" />
        </div>
        <div className="about-card about-card--3">
          <img src={aboutImg2} alt="image" />
        </div>
        {/* <div className="about-card about-card--4">
          <img src={aboutImg3} alt="image" />
        </div>
        <div className="about-card about-card--5">
          <h2>Experience</h2>
          <p>
            Over the years, I’ve collaborated with clients like ShopEase,
            FinTrack, and Insightly, working on everything from e-commerce
            platforms to SaaS dashboards. My approach combines creativity with a
            strong foundation in design principles and user research, ensuring
            that every project I undertake not only meets but exceeds
            expectations.
          </p>
        </div>
        <div className="about-card about-card--6">
          <img src={aboutImg4} alt="image" />
        </div> */}
      </div>
    </>
  );
};

export default AboutPage;
