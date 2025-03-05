import Section from "../shared/Section";
import Container from "../shared/Container";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <Section>
      <Container>
        <Card className="lg:p-8 p-6">
          <h2 className="headline-caps text-xl mb-4">Projects</h2>
          <p className="mb-4">
            During my studies and freelance work, successful projects have been
            completed.
          </p>
          <Link className="link w-max" to="/projects">
            To the projects
          </Link>
        </Card>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
