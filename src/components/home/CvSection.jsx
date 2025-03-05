import Section from "../shared/Section";
import Container from "../shared/Container";
import Grid from "../shared/Grid";
import Card from "../shared/Card";
import Button from "../shared/Button";

const Date = ({ children }) => {
  return <span className="text-sm text-gray-500">{children}</span>;
};

const CvSection = () => {
  return (
    <Section className="py-16">
      <Container>
        <h2 className="text-3xl mb-6">Education</h2>
        <Grid className="mb-12 gap-6">
          <Card className="flex flex-col gap-4 p-8">
            <h3 className="headline-caps text-xl">School education</h3>
            <h4 className="text-xl">AHS Matura</h4>
            <p>
              Akademisches Gymnasium Wien <br /> Beethovenplatz 1, 1010 Vienna
            </p>
            <Date>June 2020</Date>
          </Card>
          <Card className="flex flex-col gap-4 p-8">
            <h3 className="headline-caps text-xl">Academic studies</h3>
            <h4 className="text-xl">BSc Webdevelopment</h4>
            <p>
              SAE Institute Wien <br /> Hohenstaufengasse 6, 1010 Vienna
            </p>
            <Date>March 2024 - April 2027</Date>
          </Card>
        </Grid>

        <h2 className="text-3xl mb-6">Professional Career</h2>
        <Grid className="gap-6">
          <Card className="flex flex-col gap-4 p-8">
            <h3 className="headline-caps text-xl">Military service</h3>
            <p>Fliegerhorst Brumowski, Langenlebarn</p>
            <Date>October 2020 - May 2021</Date>
          </Card>
          <Card className="flex flex-col gap-4 p-8">
            <h3 className="headline-caps text-xl">Assistant manager</h3>
            <p>Terrassencafe im Hundertwasserhaus</p>
            <Date>June 2021 - February 2025</Date>
          </Card>
          <Card className="flex flex-col gap-4 col-span-2 p-8">
            <h3 className="headline-caps text-xl">Software Developer</h3>
            <h4 className="text-xl">Adana Gmbh</h4>
            <p>
              Absberggasse 27, Loft 7.14 <br /> 1100 Vienna
            </p>
            <Date>
              February 2025 - <em className="emphasized">Present</em>
            </Date>
          </Card>
        </Grid>
        <Button className="mt-6">Download CV</Button>
      </Container>
    </Section>
  );
};

export { CvSection, Date };
