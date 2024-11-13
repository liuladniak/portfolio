import ProjectLinks from "../ProjectLinks/ProjectLinks";
import checkIcon from "../../assets/icons/done.svg";
import flagIcon from "../../assets/icons/flag.svg";

import "./TabContent.scss";

const TabContent = ({
  title,
  description,
  outcome,
  featuresCompleted,
  featuresInProgress,
  media,
  nextSteps,
  links,
}) => {
  return (
    <section className="tab-content">
      <div className="tab-content__section">
        <h1 className="tab-content__heading tab-content__heading--page">
          {title}
        </h1>

        <div className="tab-content__overview">
          <p className="tab-content__desc">{description}</p>
        </div>
        <div className="tab-content__img">
          {media?.type === "video" ? (
            <video src={media.src} autoPlay loop muted />
          ) : (
            <img src={`${media.src}`} alt={title} />
          )}
        </div>

        {featuresCompleted && featuresCompleted.length > 0 && (
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
        )}
      </div>

      <div className="tab-content__section">
        <h2 className="tab-content__heading">Outcome</h2>
        <p className="tab-content__desc">{outcome}</p>
        <ProjectLinks className="tab-content__links" projectData={links} />
      </div>

      {(nextSteps || (featuresInProgress && featuresInProgress.length > 0)) && (
        <div className="tab-content__section">
          {nextSteps && (
            <>
              <h2 className="tab-content__heading">Next steps</h2>
              <p className="tab-content__desc">{nextSteps}</p>
            </>
          )}
          {featuresInProgress && featuresInProgress.length > 0 && (
            <>
              <h3 className="tab-content__subheading">Features in progress</h3>
              <ul className="tab-content__features-list">
                {featuresInProgress.map((feature, index) => (
                  <li className="tab-content__features-item" key={index}>
                    <img
                      className="tab-content__icon--next"
                      src={flagIcon}
                      alt="circle icon"
                    />
                    <span>{feature.name}</span>
                    <span>{feature.description}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default TabContent;
