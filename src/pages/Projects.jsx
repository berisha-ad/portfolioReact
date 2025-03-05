import HeroSection from "../components/projects/HeroSection";
import Divider from "../components/projects/Divider";
import ProjectsSection from "../components/projects/ProjectsSection";
import ScrollToUp from "../components/shared/ScrollToUp";

const Projects = () => {
  return (
    <>
      <ScrollToUp />
      <HeroSection />
      <Divider />
      <ProjectsSection />
    </>
  );
};

export default Projects;
