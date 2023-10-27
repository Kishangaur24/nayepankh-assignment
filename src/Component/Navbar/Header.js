import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from "../FrontPage/logo.jpg"
function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" style={{ position: 'sticky', top: '0' }} >
      <Container>
      <img src={img} height="150px"/>
        {/* <Navbar.Brand as={NavLink} to="/"><img src='../FrontPage/logo.jpg'/></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={NavLink} className='text-white ' to="/">Home</Nav.Link>
          <Nav.Link as={NavLink}  className='text-white' to="/AboutUs">About us</Nav.Link>
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