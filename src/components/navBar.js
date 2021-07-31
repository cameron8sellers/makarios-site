import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./css/navBar.css";

const NavBar = () => {
 return (
  <div className="nav-container">
   <Nav className="nav">
    <NavItem className="main-heading">
     <NavLink href="/"></NavLink>Makarios Assisted Livivng{" "}
    </NavItem>

    <NavItem>
     <NavLink href="#" className="nav-link">
      Information
     </NavLink>
    </NavItem>

    <NavItem>
     <NavLink href="#" className="nav-link">
      Locations
     </NavLink>
    </NavItem>

    <NavItem>
     <NavLink href="#" className="nav-link">
      Services
     </NavLink>
    </NavItem>

    <NavItem>
     <NavLink href="/contact" className="nav-link">
      Contact
     </NavLink>
    </NavItem>

    <NavItem>
     <NavLink href="#" className="nav-link">
      Gallery
     </NavLink>
    </NavItem>
   </Nav>
  </div>
 );
};

export default NavBar;
