import Container from "./Container";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import cv from "../../assets/cv_en.pdf";

const Footer = () => {
  return (
    <footer className="pt-16 pb-40 bg-secondary">
      <Container>
        <div className="relative flex lg:flex-row flex-col justify-between items-start">
          <Link className="logo py-2 lg:mb-0 mb-6" to="/">
            Adrian Berisha
          </Link>
          <Grid className="lg:grid-cols-3 grid-cols-1 gap-6">
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="link" href="">
                  Github
                </a>
              </li>
              <li>
                <a className="link" href="">
                  LinkedIn
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="link" to="imprint">
                  Imprint
                </Link>
              </li>
              <li>
                <a href={cv} download="cv_en.pdf" className="link">
                  Download CV
                </a>
              </li>
            </ul>
          </Grid>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
