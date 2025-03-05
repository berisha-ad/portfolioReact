import Section from "../shared/Section";
import Container from "../shared/Container";

const HeroSection = () => {
  return (
    <Section className="py-28">
      <Container>
        <h1 className="text-4xl font-extralight mb-6">My projects</h1>
        <p className="text-lg">This page contains links to my projects</p>
      </Container>
    </Section>
  );
};

export default HeroSection;
