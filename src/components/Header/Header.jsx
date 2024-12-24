import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <h1 id="myName">Seth D Joslin</h1>
        <nav id="navBar">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Portfolio
          </NavLink>

          {/* <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink> */}

          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resumé
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
