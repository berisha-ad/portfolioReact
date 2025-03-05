import Section from "../shared/Section";
import Container from "../shared/Container";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <Section className="py-16">
      <Container>
        <Card className="p-8">
          <h2 className="headline-caps text-xl mb-6">About</h2>
          <p className="mb-4">
            Hi, I’m Adrian, a passionate Full Stack Developer focused on
            building innovative and seamless web applications. Always eager to
            learn, I stay up to date with the latest trends to create dynamic
            digital experiences.
          </p>
          <Link className="link w-max" to="/about">
            About me
          </Link>
        </Card>
      </Container>
    </Section>
  );
};

export default AboutSection;
