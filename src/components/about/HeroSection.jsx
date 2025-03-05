import Section from "../shared/Section";
import Container from "../shared/Container";

const HeroSection = () => {
  return (
    <Section className="py-28">
      <Container className="flex flex-col gap-8">
        <h1 className="text-4xl font-extralight">About me</h1>
        <p>Coming Soon</p>
      </Container>
    </Section>
  );
};

export default HeroSection;
