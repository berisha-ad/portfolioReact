import Section from "../shared/Section";
import Container from "../shared/Container";
import Grid from "../shared/Grid";
import projects from "../../projects";
import Card from "../shared/Card";
import { Date } from "../home/CvSection";

const ProjectsSection = () => {
  return (
    <Section className="py-16">
      <Container>
        <Grid className="grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card className="p-6 flex flex-col gap-2" key={project.id}>
              <img
                className="w-full h-32 object-cover rounded-lg"
                src={project.image}
                alt={project.title}
              />
              <h2 className="headline-caps text-xl">{project.title}</h2>
              <p>{project.description}</p>
              <Date>{project.year}</Date>
              <div className="flex gap-2">
                {project.skills.map((skill) => (
                  <span className="skill">{skill}</span>
                ))}
              </div>
              <a href={project.link}>Visit Project</a>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
