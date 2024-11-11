import HeroProjects from "../../components/HeroProjects/HeroProjects";
import ProjectsTabs from "../../components/ProjectsTabs/ProjectsTabs";
import "./ProjectsPage.scss";

const ProjectsPage = () => {
  return (
    <>
      <HeroProjects />
      <section className="projects-main">
        <ProjectsTabs />
      </section>
    </>
  );
};

export default ProjectsPage;
