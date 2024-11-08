import CitygoContent from "../../components/CitygoContent/CitygoContent";
import DashboardContent from "../../components/DashboardContent/DashboardContent";
import HeroProjects from "../../components/HeroProjects/HeroProjects";
import LocalGardensContent from "../../components/LocalGardensContent/LocalGardensContent";
import SunsetContent from "../../components/SunsetContent/SunsetContent";
import Tabs from "../../components/Tabs/Tabs";
const ProjectsPage = () => {
  const tabsData = [
    {
      label: "CityGo",
      content: <CitygoContent />,
      icon: "🏛",
    },
    {
      label: "Dashboard",
      content: <DashboardContent />,
      icon: "📈",
    },
    {
      label: "Local Gardens",
      content: <LocalGardensContent />,
      icon: "🏺",
    },
    {
      label: "Sunset",
      content: <SunsetContent />,
      icon: "🍕",
    },
  ];

  return (
    <>
      <HeroProjects />
      <section className="projects-main">
        <Tabs tabs={tabsData} />
      </section>
    </>
  );
};

export default ProjectsPage;
