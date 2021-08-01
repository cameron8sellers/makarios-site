import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./css/navBar.css";

const NavBar = () => {
 return (
  <div className="nav-container">
   <Nav className="nav">
    <NavItem className="main-heading">
     <NavLink href="/"></NavLink>Makarios Assisted Livivng
    </NavItem>

    <NavItem>
     <NavLink href="/locations" className="nav-link">
      Locations
     </NavLink>
    </NavItem>

    <NavItem>
     <NavLink href="/services" className="nav-link">
      Services
     </NavLink>
    </NavItem>

    <NavItem>
     <NavLink href="/contact" className="nav-link">
      Contact
     </NavLink>
    </NavItem>

    <NavItem>
     <NavLink href="/photos" className="nav-link">
      Photos
     </NavLink>
    </NavItem>
   </Nav>
  </div>
 );
};

export default NavBar;
