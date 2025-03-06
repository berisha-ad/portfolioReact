import Section from "../shared/Section";
import Container from "../shared/Container";

const HeroSection = () => {
  return (
    <Section className="pt-14 pb-8">
      <Container>
        <h1 className="text-4xl font-extralight mb-6">
          My <em className="emphasized">projects</em>
        </h1>
        <p className="text-lg">Tap on a project for further details.</p>
      </Container>
    </Section>
  );
};

export default HeroSection;
