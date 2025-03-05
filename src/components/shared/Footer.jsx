import Container from "./Container";
import { Link } from "react-router-dom";
import Grid from "./Grid";

const Footer = () => {
  return (
    <footer className="pt-16 pb-40 bg-secondary">
      <Container>
        <div className="relative z-30 flex justify-between items-start">
          <Link className="logo py-2" to="/">
            Adrian Berisha
          </Link>
          <Grid className="grid-cols-3 gap-6">
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
                  Github
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
                <Link className="link" to="/">
                  Download CV
                </Link>
              </li>
            </ul>
          </Grid>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
