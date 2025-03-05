import Container from "../shared/Container";
import Grid from "../shared/Grid";
import Section from "../shared/Section";
import skills from "../../skills";
import Card from "../shared/Card";

const SkillsSection = () => {
  return (
    <Section className="py-16">
      <Container>
        <h2 className="text-2xl headline-caps mb-6">Skills</h2>
        <Grid className="lg:grid-cols-4 grid-cols-2 gap-4">
          {skills.map((skill) => (
            <Card
              className="p-4 flex rounded-sm gap-4 flex-row items-center"
              key={skill.id}
            >
              <img src={skill.icon} width="30px" alt={skill.skill} />
              <p>{skill.skill}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default SkillsSection;
