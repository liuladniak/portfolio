import "./LocalGardensContent.scss";
import lgImg from "../../assets/images/Local Gardens Homepage.png";

const LocalGardensContent = () => {
  return (
    <section className="tab-content">
      <div className="tab-content__section">
        <h1 className="tab-content__heading tab-content__heading--page">
          Local Gardens Antique store
        </h1>
        <div className="tab-content__overview">
          <p className="tab-content__desc">
            Local Gardens is a home decor store app that offers a seamless
            shopping experience. The app showcases a variety of decor products
            and provides users with a clean, intuitive interface for browsing
            and selecting items. It's fully responsive, ensuring smooth
            navigation across devices, and integrates features like product
            filters, detailed descriptions, and a visually appealing design to
            enhance the shopping experience.
          </p>
        </div>
        <div className="tab-content__img">
          <img src={lgImg} alt="Image of the app" />
        </div>
      </div>
      <div className="tab-content__section">
        <h2 className="tab-content__heading">Outcome</h2>
        <p className="tab-content__desc">
          The Local Gardens is a work in progress, with continuous development
          underway. My focus is on enhancing its functionality and user
          experience. You can track updates and improvements on the project’s
          GitHub, and expect new features to gradually appear on the live page
          as they are implemented.
        </p>
      </div>
    </section>
  );
};

export default LocalGardensContent;
