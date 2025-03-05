import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import { CvSection } from "../components/home/CvSection";
import ProjectsSection from "../components/home/ProjectsSection";
import SkillsSection from "../components/home/SkillsSection";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CvSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </>
  );
};

export default Home;
