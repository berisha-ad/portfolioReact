import Section from "../shared/Section";
import Container from "../shared/Container";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import profile from "../../assets/profile.png";

const HeroSection = () => {
  return (
    <Section className="lg:py-28 pt-8 pb-16">
      <Container className="lg:flex-row items-center lg:items-stretch lg:gap-0 gap-4 justify-center lg:justify-between">
        <div className="lg:max-w-3/5 max-w-full lg:block flex flex-col items-center lg:order-1 order-2">
          <h1 className="lg:text-4xl text-3xl lg:text-left text-center font-extralight mb-6">
            Adrian <em className="emphasized">Berisha</em>, <br />
            Web developer from Vienna
          </h1>
          <p className="text-lg mb-6 lg:text-left xs:bg-red-500 text-center">
            As a full-stack developer, I create modern web applications using
            <br />
            technologies such as Python and PHP
          </p>
          <div className="flex lg:gap-4 gap-4 justify-center lg:justify-start">
            <a
              className="opacity-50 hover:opacity-100 transition-opacity ease-in"
              href="https://github.com/berisha-ad"
            >
              <img src={github} className="lg:w-10 w-10" alt="Github icon" />
            </a>
            <a
              className="opacity-50 hover:opacity-100 transition-opacity ease-in"
              href="https://www.linkedin.com/in/adrian-berisha-b7a03425b/"
            >
              <img src={linkedin} className="lg:w-10 w-10" alt="Github icon" />
            </a>
          </div>
        </div>
        <img
          className="profile-img border order-1 lg:order-2"
          src={profile}
          alt="Bild von Adrian Berisha"
        />
      </Container>
    </Section>
  );
};

export default HeroSection;
