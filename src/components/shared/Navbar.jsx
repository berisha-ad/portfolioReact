import { NavLink, Link } from "react-router-dom";
import Container from "./Container";

const NavItem = ({ children, to }) => {
  return (
    <NavLink
      className="font-extralight lg:text-md text-xl text-gray-200 py-2 px-4 hover:bg-emerald-900 rounded-lg transition-colors ease-in"
      to={to}
    >
      {children}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <header className="relative z-50 py-4">
      <Container className="flex-row justify-between">
        <Link className="logo py-2" to="/">
          Adrian Berisha
        </Link>
        <div className="lg:relative lg:bottom-auto fixed w-full left-0 lg:block lg:w-max flex justify-center bottom-15">
          <nav className="flex flex-row rounded-lg border bg-secondary">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/about">About</NavItem>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
