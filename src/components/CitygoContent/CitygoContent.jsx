import "./CitygoContent.scss";
import checkIcon from "../../assets/icons/done.svg";
import clockIcon from "../../assets/icons/flag.svg";
import iconGithub from "../../assets/icons/github.svg";
import iconLaptop from "../../assets/icons/laptop.svg";
import citygoVideo from "../../assets/videos/video-project1.mp4";

const featuresCompleted = [
  {
    name: "User Authentication",
    description:
      "JWT-based authentication for user access using Node.js and Express.",
  },
  {
    name: "Shopping Cart Management",
    description:
      "Easily review and manage selected tours with Redux for state management.",
  },
  {
    name: "Tour Filtering",
    description:
      "Filter tours by location, duration, and price using React Hooks for state handling.",
  },
  {
    name: "Quick Tour Search",
    description:
      "Find specific tours with keyword search powered by Elasticsearch.",
  },
  {
    name: "Booking Process",
    description:
      "Guided booking for dates and group sizes implemented with React Router.",
  },
  {
    name: "Interactive Availability Calendar",
    description:
      "Visual calendar for selecting available dates using a custom React component.",
  },
  {
    name: "Responsive Design",
    description:
      "User-friendly on mobile and desktop devices, developed with CSS Grid and Flexbox.",
  },
  {
    name: "Database Integration",
    description:
      "Efficient storage and retrieval of user data using PostgreSQL with Knex.js.",
  },
  {
    name: "Interactive Tour Map",
    description:
      "Visualize tour locations on an lightweight interactive map using Leaflet Maps API.",
  },
];

const featuresInProgress = [
  {
    name: "User Comments",
    description: "Allow users to leave feedback and reviews.",
  },
  {
    name: "Currency Converter",
    description: "Convert prices to different currencies.",
  },
  {
    name: "Google Authentication",
    description: "Sign in using Google accounts.",
  },
  {
    name: "Stripe Checkout",
    description: "Secure payments through Stripe integration.",
  },
  {
    name: "Enhanced Map Functionality",
    description: "Improved map features for better navigation.",
  },
  {
    name: "AI-Powered Recommendations",
    description: "Personalized tour suggestions using AI.",
  },
];

const CitygoContent = () => {
  return (
    <section className="tab-content">
      <div className="tab-content__section">
        <h1 className="tab-content__heading tab-content__heading--page">
          CityGo Travel Booking app
        </h1>
        <div className="tab-content__overview">
          <p className="tab-content__desc">
            The app addresses the common challenges travelers encounter when
            planning city tours, such as cumbersome booking processes and
            unclear navigation. By providing a streamlined user experience, the
            app ensures secure user management and simplifies the booking
            journey. With CityGo, travelers can easily discover and book their
            ideal city tours, making their travel planning efficient and
            enjoyable.
          </p>

          <div className="tab-content__features">
            <h3 className="tab-content__subheading">Features implemented</h3>
            <ul className="tab-content__features-list">
              {featuresCompleted.map((feature, index) => (
                <li className="tab-content__features-item" key={index}>
                  <img
                    className="tab-content__icon--check"
                    src={checkIcon}
                    alt="Check icon"
                  />
                  <span className="tab-content__features-name">
                    {feature.name}:
                  </span>
                  <span className="tab-content__features-desc">
                    {feature.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h2 className="tab-content__heading">Demo</h2>
        <div className="tab-content__img">
          <video src={citygoVideo} autoPlay loop muted></video>
        </div>
      </div>

      <div className="tab-content__section">
        <h2 className="tab-content__heading">Outcome</h2>
        <p className="tab-content__desc">
          The CityGo app is live and ready for exploration! Check out the demo
          to see the features in action, and feel free to visit the GitHub
          repository for collaboration or to share your feedback.
        </p>
        <div className="tab-content__icons">
          <a href="https://citygo.liuladniak.io/" target="_blank">
            <img src={iconGithub} className="tab-content__icon" />
            <span className="tab-content__icon-alt">Github repo</span>
          </a>
          <a href="https://github.com/liuladniak/citygo" target="_blank">
            <img src={iconLaptop} className="tab-content__icon" />
            <span className="__icon-alt">View live</span>
          </a>
        </div>
      </div>
      <div className="tab-content__section">
        <h2 className="tab-content__heading">Next steps</h2>
        <p className="tab-content__desc">
          As I continue to enhance the CityGo Travel Booking app, my focus is on
          implementing features that improve user experience. I appreciate your
          feedback as I work towards delivering a seamless booking process and
          expanded functionalities.
        </p>
        <h3 className="tab-content__subheading">Features in progress</h3>
        <ul className="tab-content__features-list">
          {featuresInProgress.map((feature, index) => (
            <li className="tab-content__features-item" key={index}>
              <img
                className="tab-content__icon--next"
                src={clockIcon}
                alt="circle icon"
              />
              <span>{feature.name}</span>
              <span>{feature.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CitygoContent;
