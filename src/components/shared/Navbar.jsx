import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Container from "./Container";

const NavItem = ({ children, to }) => {
  return (
    <NavLink
      className="font-extralight text-gray-200 py-2 px-4 hover:bg-green-950 transition-colors"
      to={to}
    >
      {children}
    </NavLink>
  );
};

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header className="relative z-50 py-4">
      <Container className="flex-row justify-between">
        <Link className="logo py-2" to="/">
          Adrian Berisha
        </Link>
        <nav className="flex">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/about">About</NavItem>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
