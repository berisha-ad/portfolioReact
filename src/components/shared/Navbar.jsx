import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "./Container";
import "./navbar.css";
import hacker from "../../assets/hacker.svg";

const NavItem = ({ children, to, onClick }) => {
  return (
    <NavLink onClick={onClick} className="navlink" to={to}>
      {children}
    </NavLink>
  );
};

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header className="navbar">
      <Container className="flex-row justify-between items-center">
        <Link className="logo py-2" to="/">
          Adrian Berisha
        </Link>
        <div className="menu-wrapper">
          <button onClick={() => setMenuState(!menuState)} className="menubtn">
            {menuState ? "close" : "menu"}
          </button>
          <nav className={menuState ? `menu open` : `menu`}>
            <NavItem onClick={() => setMenuState(false)} to="/">
              Home
            </NavItem>
            <NavItem onClick={() => setMenuState(false)} to="/projects">
              Projects
            </NavItem>
            <NavItem onClick={() => setMenuState(false)} to="/about">
              About
            </NavItem>
            <div className="flex gap-4 contact-icons">
              <div className="navlink small w-full">
                <a href="mailto:adrianberisha0@gmail.com">Contact</a>
              </div>
              <div className="navlink small">
                <img src={hacker} width="60px" alt="programmer icon" />
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
