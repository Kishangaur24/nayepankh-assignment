import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={NavLink} className='text-white ' to="/Home">Home</Nav.Link>
          <Nav.Link as={NavLink}  className='text-white' to="/certificate">About us</Nav.Link>
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