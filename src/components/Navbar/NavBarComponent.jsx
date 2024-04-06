import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Brand from '../Assets/Brand.png';

const NavBarComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };
  const scrollToTop = () => {
    setExpanded(false)
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  return (
    <>
      <Navbar expand="lg" className="navigation-bar fixed-top justify-content-between" expanded={expanded} collapseOnSelect>
        <Navbar.Brand as={NavLink} to="/" className='brand-logo' >
          <img src={Brand} alt="" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle}  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} className='nav-links' to="/" onClick={scrollToTop} >Home</Nav.Link>
            <Nav.Link as={NavLink} className='nav-links' to="/About" onClick={scrollToTop} >About</Nav.Link>
            <Nav.Link as={NavLink} className='nav-links' to="/OurServices" onClick={scrollToTop} >Our Services</Nav.Link>

            <Nav.Link as={NavLink} className='nav-links' to="/ShowCase" onClick={scrollToTop} >Showcase</Nav.Link>

            <Nav.Link as={NavLink} className='nav-links' to="/Contact" onClick={scrollToTop} >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
