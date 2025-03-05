import Section from "../components/shared/Section";
import Container from "../components/shared/Container";

const Imprint = () => {
  return (
    <Section className="py-24">
      <Container className="flex-col gap-6">
        <h1 className="text-4xl">Imprint</h1>
        <h2 className="text-2xl">Adrian Berisha</h2>
        <div>
          <p className="text-gray-500">Address</p>
          <p className="text-xl">Kegelgasse 34-38 1030 Vienna</p>
        </div>
        <div>
          <p className="text-gray-500">Phone</p>
          <p className="text-xl">+43 650 99 0 77 65</p>
        </div>
        <div>
          <p className="text-gray-500">E-Mail</p>
          <p className="text-xl">adrianberisha0@gmail.com</p>
        </div>
        <div>
          <p className="text-gray-500">Website</p>
          <p className="text-xl">www.adrianberisha.at</p>
        </div>
      </Container>
    </Section>
  );
};

export default Imprint;
