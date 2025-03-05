import Section from "../components/shared/Section";
import Container from "../components/shared/Container";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Section className="py-36 h-[60vh]">
      <Container className="gap-6">
        <h1 className="text-4xl">404 - Seite nicht gefunden</h1>
        <p className="text-2xl">
          Die Seite existiert nicht oder wurde verschoben.
        </p>
        <Link to="/" className="link w-max">
          Zur Startseite
        </Link>
      </Container>
    </Section>
  );
};

export default NotFound;
