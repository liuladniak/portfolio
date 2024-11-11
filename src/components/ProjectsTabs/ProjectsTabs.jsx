import { useState } from "react";
import "./ProjectsTabs.scss";
import TabContent from "../TabContent/TabContent";
import projectData from "../../data/projectData.json";

const ProjectsTabs = () => {
  const [activeTab, setActiveTab] = useState(projectData[0].label);
  const activeTabContent = projectData.find((tab) => tab.label === activeTab);

  return (
    <nav className="tabs">
      <ul className="tab-labels">
        {projectData.map((tab) => (
          <li
            key={tab.label}
            className={`tab-label ${
              tab.label === activeTab ? "tab-label--active" : ""
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            <span className="tab__icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <TabContent
          title={activeTabContent.title}
          description={activeTabContent.description}
          featuresCompleted={activeTabContent.featuresCompleted}
          featuresInProgress={activeTabContent.featuresInProgress}
          media={activeTabContent.media}
          outcome={activeTabContent.outcome}
          links={activeTabContent.links}
          nextSteps={activeTabContent.nextSteps}
        />
      </div>
    </nav>
  );
};

export default ProjectsTabs;
