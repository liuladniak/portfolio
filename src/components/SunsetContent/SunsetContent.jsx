import "./SunsetContent.scss";
import sunsetImg from "../../assets/images/PizzaShop.png";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
const links = {
  live: "https://sunset-pizza-shop.netlify.app/",
  github: "https://github.com/liuladniak/travel-booking-app--user",
};
const SunsetContent = () => {
  return (
    <section className="tab-content">
      <div className="tab-content__section">
        <h1 className="tab-content__heading tab-content__heading--page">
          Sunset Pizza & Grill Shop
        </h1>

        <div className="tab-content__overview">
          <p className="tab-content__desc">
            Sunset Pizza Shop is an app I developed as part of a real-world
            freelance project for a local business. It provides a user-friendly
            experience, showcasing the pizza shop’s menu and details in an
            engaging way. The app allows customers to easily browse through the
            menu, view pizza options, and explore different categories. It’s
            fully responsive, ensuring smooth navigation across devices, and
            features an interactive map integration to help users locate the
            shop with ease. While it doesn't yet include online ordering, the
            app offers a simple, accessible way to learn about the shop and its
            offerings.
          </p>
        </div>
        <div className="tab-content__img">
          <img src={sunsetImg} alt="Image of the app" />
        </div>
      </div>
      <div className="tab-content__section">
        <h2 className="tab-content__heading">Outcome</h2>
        <p className="tab-content__desc">
          Boosted sales by 30% and reduced service costs by 25% by creating a
          responsive, mobile-optimized website using HTML5, CSS3, improving user
          experience to increase local customer engagement.
        </p>
        <ProjectLinks className="tab-content__links" projectData={links} />
      </div>
    </section>
  );
};

export default SunsetContent;
