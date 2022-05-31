import React from 'react'
import { StyledAnchor, StyledNavLink } from '../styles/GlobalStyles'
import { NavLink } from "react-router-dom";

const NavbarTop = () => {
  return (
    <div className='NavbarTop'>
        <div className='container flex-row center-center'>
            <div className='name'>
                <StyledNavLink>
                    <NavLink to="/" style={{textDecoration: 'none'}}>Angie Güemes</NavLink>
                </StyledNavLink>
            </div>
            <div className='resume'>
                <StyledAnchor href="/documents/Resume_AngelicaGuemes.pdf" download>
                    Resume
                </StyledAnchor>
            </div>
        </div>
    </div>
  )
}

export default NavbarTop