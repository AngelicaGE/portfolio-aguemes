import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavLink } from "../styles/GlobalStyles";

const NavbarBottom = () => {
  return (
    <div className="NavbarBottom">
      <div className="container flex-row center-center">
        <StyledNavLink>
          <NavLink to="/Projects">Projects</NavLink>
        </StyledNavLink>
        |
        <StyledNavLink>
          <NavLink to="/WorkExperience">Work experience</NavLink>
        </StyledNavLink>
        |
        <StyledNavLink>
          <NavLink to="/Studies">Studies</NavLink>
        </StyledNavLink>
      </div>
    </div>
  );
};

export default NavbarBottom;
