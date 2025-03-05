import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import { CvSection } from "../components/home/CvSection";
import ProjectsSection from "../components/home/ProjectsSection";
import SkillsSection from "../components/home/SkillsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CvSection />
      <ProjectsSection />
      <SkillsSection />
    </>
  );
};

export default Home;
