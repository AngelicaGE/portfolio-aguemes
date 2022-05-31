import React from 'react'
import '../styles/Navbar.scss'
import NavbarTop from '../containers/NavbarTop'
import NavbarBottom from '../containers/NavbarBottom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <NavbarTop></NavbarTop>
        <NavbarBottom></NavbarBottom>
    </div>
  )
}

export default Navbar