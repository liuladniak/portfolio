import "./SunsetContent.scss";
import sunsetImg from "../../assets/images/PizzaShop.png";

const SunsetContent = () => {
  return (
    <section className="tab-content">
      <div className="tab-content__section">
        <h1 className="tab-content__heading tab-content__heading--page">
          Sunset Pizza & Grill Shop
        </h1>
        <div className="tab-content__overview">
          <p className="tab-content__desc">
            Sunset Pizza Shop is a user-friendly app that presents the menu and
            details of a pizza shop in an engaging way. The app allows customers
            to easily browse through the menu, view pizza options, and explore
            different categories. It’s fully responsive, ensuring smooth
            navigation across devices, and features an interactive map
            integration to help users locate the shop with ease. While it
            doesn't yet include online ordering, the app offers a simple,
            accessible way to learn about the shop and its offerings.
          </p>
        </div>
        <div className="tab-content__img">
          <img src={sunsetImg} alt="Image of the app" />
        </div>
      </div>
      <div className="tab-content__section">
        <h2 className="tab-content__heading">Outcome</h2>
        <p className="tab-content__desc">
          The Sunset Pizza is a work in progress, with continuous development
          underway. My focus is on enhancing its functionality and user
          experience. You can track updates and improvements on the project’s
          GitHub, and expect new features to gradually appear on the live page
          as they are implemented.
        </p>
      </div>
    </section>
  );
};

export default SunsetContent;
