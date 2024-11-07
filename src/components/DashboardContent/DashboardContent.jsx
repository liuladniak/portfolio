import "../CitygoContent/CitygoContent.scss";
import dashboardImg from "../../assets/images/dashboardImg.png";

const DashboardContent = () => {
  return (
    <section className="tab-content">
      <div className="tab-content__section">
        <h1 className="tab-content__heading tab-content__heading--page">
          Dashboard for CityGo Travel Booking app
        </h1>
        <div className="tab-content__overview">
          <p className="tab-content__desc">
            The CityGo Dashboard is an admin interface for managing tours,
            bookings, and user data for the CityGo Travel Booking app. Built
            with React and integrated with PostgreSQL, it allows administrators
            to easily view, add, and edit tour details, track booking
            information, and manage user accounts. It also includes
            authentication to ensure secure access and CRUD functionality for
            managing the app’s data efficiently.
          </p>
        </div>
        <div className="tab-content__img">
          <img src={dashboardImg} alt="Image of the app" />
        </div>
      </div>
      <div className="tab-content__section">
        <h2 className="tab-content__heading">Outcome</h2>
        <p className="tab-content__desc">
          The CityGo Dashboard is a work in progress, with continuous
          development underway. My focus is on enhancing its functionality and
          user experience. You can track updates and improvements on the
          project’s GitHub, and expect new features to gradually appear on the
          live page as they are implemented.
        </p>
      </div>
    </section>
  );
};

export default DashboardContent;
