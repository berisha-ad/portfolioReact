import Section from "../shared/Section";
import Container from "../shared/Container";
import Grid from "../shared/Grid";
import Card from "../shared/Card";
import Button from "../shared/Button";
import cv from "../../assets/cv_en.pdf";

const Date = ({ children }) => {
  return <span className="text-sm text-gray-500">{children}</span>;
};

const CvSection = () => {
  return (
    <Section className="py-16">
      <Container>
        <h2 className="text-3xl mb-6">Education</h2>
        <Grid className="mb-12 gap-6 lg:grid-cols-2 grid-cols-1">
          <Card className="flex flex-col gap-4 lg:p-8 p-6">
            <h3 className="headline-caps lg:text-xl text-md">
              School education
            </h3>
            <h4 className="text-xl">AHS Matura</h4>
            <p>
              Akademisches Gymnasium Wien <br /> Beethovenplatz 1, 1010 Vienna
            </p>
            <Date>June 2020</Date>
          </Card>
          <Card className="flex flex-col gap-4 lg:p-8 p-6">
            <h3 className="headline-caps lg:text-xl text-md">
              Academic studies
            </h3>
            <h4 className="text-xl">BSc Webdevelopment</h4>
            <p>
              SAE Institute Wien <br /> Hohenstaufengasse 6, 1010 Vienna
            </p>
            <Date>March 2024 - April 2027</Date>
          </Card>
        </Grid>

        <h2 className="text-3xl mb-6">Professional Career</h2>
        <Grid className="lg:grid-cols-2 grid-cols-1 gap-6">
          <Card className="flex flex-col gap-4 lg:p-8 p-6">
            <h3 className="headline-caps lg:text-xl text-md">
              Military service
            </h3>
            <p>Fliegerhorst Brumowski, Langenlebarn</p>
            <Date>October 2020 - May 2021</Date>
          </Card>
          <Card className="flex flex-col gap-4 lg:p-8 p-6">
            <h3 className="headline-caps lg:text-xl text-md">
              Assistant manager
            </h3>
            <p>Terrassencafe im Hundertwasserhaus</p>
            <Date>June 2021 - February 2025</Date>
          </Card>
          <Card className="flex flex-col gap-4 lg:col-span-2 lg:p-8 p-6">
            <h3 className="headline-caps lg:text-xl text-md">
              Software Developer
            </h3>
            <h4 className="text-xl">Adana Gmbh</h4>
            <p>
              Absberggasse 27, Loft 7.14 <br /> 1100 Vienna
            </p>
            <Date>
              February 2025 - <em className="emphasized">Present</em>
            </Date>
          </Card>
        </Grid>
        <a href={cv} download="cv_en.pdf" className="mt-6 btn w-max">
          Download CV
        </a>
      </Container>
    </Section>
  );
};

export { CvSection, Date };
