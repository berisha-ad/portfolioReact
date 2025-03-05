import Section from "../shared/Section";
import Container from "../shared/Container";
import github from "../../assets/github.svg";
import profile from "../../assets/profile.png";

const HeroSection = () => {
  return (
    <Section className="py-28">
      <Container className="flex-row justify-between">
        <div className="lg:max-w-3/5">
          <h1 className="text-4xl font-extralight mb-6">
            Adrian <em className="emphasized">Berisha</em>, <br />
            Web developer from Vienna
          </h1>
          <p className="text-lg mb-6">
            As a full-stack developer, I create modern web applications using
            <br />
            technologies such as Python and PHP
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/berisha-ad">
              <img src={github} width="40px" alt="Github icon" />
            </a>
            <a href="https://github.com/berisha-ad">
              <img src={github} width="40px" alt="Github icon" />
            </a>
          </div>
        </div>
        <img
          className="profile-img border"
          src={profile}
          alt="Bild von Adrian Berisha"
        />
      </Container>
    </Section>
  );
};

export default HeroSection;
