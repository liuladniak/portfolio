import "../CitygoContent/CitygoContent.scss";
import dashboardImg from "../../assets/images/citygoImg.png";
import dashboardImg2 from "../../assets/images/citygoImg2.png";

const DashboardContent = () => {
  return (
    <section className="tab-content">
      <div className="tab-content__section">
        <h1 className="tab-content__heading tab-content__heading--page">
          Dashboard for CityGo Travel Booking app
        </h1>
        <div className="tab-content__overview">
          <span className="tab-content__icon">🏛</span>
          <p className="tab-content__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
            officiis blanditiis quibusdam impedit dolor ad aliquam fugiat
            cumque. Temporibus quis quisquam dolore quam deleniti ullam, labore
            officia a illum consequatur.
          </p>
          <ul className="tab-content__tags">
            <li className="tab-content__tag">Mobile</li>
            <li className="tab-content__tag">Application</li>
            <li className="tab-content__tag">E-Commerce</li>
          </ul>
        </div>
        <div className="tab-content__img">
          <img src={dashboardImg} alt="Image of the app" />
        </div>
      </div>
      <div className="tab-content__section">
        <h2 className="tab-content__heading">Outcome</h2>
        <p className="tab-content__desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
          velit ullam repellendus blanditiis corporis suscipit odio vitae
          inventore harum, dolore, corrupti iusto ducimus saepe tenetur
          voluptatem animi qui illo accusamus?
        </p>
      </div>
      {/* <div className="tab-content__section">
        <h2 className="tab-content__heading">Outcome</h2>
        <p className="tab-content__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut
          repellendus minima tempore modi quas distinctio, rem vel perferendis
          eius quam. Placeat facere amet et sapiente alias velit fugiat itaque!
        </p>
        <img
          className="tab-content__img"
          src={dashboardImg2}
          alt="Image of the app"
        />
      </div> */}
    </section>
  );
};

export default DashboardContent;
