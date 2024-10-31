import { useState } from "react";
import "./Tabs.scss";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <nav className="tabs">
      <ul className="tab-labels">
        {tabs.map((tab) => (
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
        {tabs.find((tab) => tab.label === activeTab).content}
      </div>
    </nav>
  );
};

export default Tabs;
