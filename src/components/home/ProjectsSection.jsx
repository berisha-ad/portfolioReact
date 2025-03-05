import Section from "../shared/Section";
import Container from "../shared/Container";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <Section>
      <Container>
        <Card className="flex flex-col gap-6 p-8">
          <h2 className="headline-caps text-xl">Projects</h2>
          <p>
            During my studies and freelance work, successful projects have been
            completed.
          </p>
          <Link to="/projects">To the projects</Link>
        </Card>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
