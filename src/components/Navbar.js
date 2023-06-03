import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css';
import myimg from '../assets/myimg.jpg';
import { color } from 'framer-motion';

function myNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='container'>
        <Navbar.Brand href="#home" id='guru'>
            <img src={'https://www.clipartmax.com/png/middle/398-3982977_meditation-clipart-guru-ji-meditation-clipart-guru-ji.png'} alt='logo' className='img' />
            <span>Guruji</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home" style={{ color: '#FD9D54' }}>Home</Nav.Link>

            <Nav.Link href="#link" className='navlink'>Call With Astrologer</Nav.Link>
            <Nav.Link href="#live" className='navlink'>Live(Coming Soon)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className='mydiv'>
            <img src={myimg} alt='myimg' className='img'/>
        </div>
      </Container>
    </Navbar>
  );
}

export default myNav;