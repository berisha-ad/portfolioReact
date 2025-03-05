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
                <Link className="py-2" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="py-2" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="py-2" to="/">
                  Projects
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="py-2" to="/">
                  Github
                </Link>
              </li>
              <li>
                <Link className="py-2" to="/">
                  LinkedIn
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="py-2" to="/">
                  Imprint
                </Link>
              </li>
              <li>
                <Link className="py-2" to="/">
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
