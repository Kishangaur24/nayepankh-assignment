import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from "../FrontPage/logo.jpg"
import { useState } from 'react';
import { animateScroll as scroll ,Link as ScrollLink } from 'react-scroll';
function Header() {
  const[click,setClick]=useState(false)
  function handleClick(){
    setClick(!click)
    scroll.scrollToTop()
  }
  return (
    <Navbar bg="dark" expand="lg" variant="dark" style={{ position: 'sticky', top: '0' }} >
      <Container>
      <img src={img} height="150px"/>
        {/* <Navbar.Brand as={NavLink} to="/"><img src='../FrontPage/logo.jpg'/></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={NavLink} className='text-white ' to="/">Home</Nav.Link>
          <ScrollLink to="/aboutUs" smooth={true} duration={500}>
          <Nav.Link as={NavLink}  className='text-white' to="/aboutUs"  onClick={handleClick}>About us</Nav.Link>
          </ScrollLink>
          <Nav.Link as={NavLink} className='text-white' to="/certificate">Our Certificate</Nav.Link>
          <Nav.Link as={NavLink} className='text-white' to="/certificate">News-Paper Recognition</Nav.Link>
          <Nav.Link as={NavLink} className='text-white' to="/certificate">Donate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;