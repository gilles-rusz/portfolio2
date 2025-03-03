import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import '../style/Navbar.css';


 
export default function navbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>John Deo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <div className='link0'>
                <Link className="link1" to="/"> Home</Link>
                <Link className="link1" to="/services"> Services</Link>
                <Link className="link1" to="/contact"> Contact</Link>
                <Link className="link1" to="/portfolio"> Portfolio</Link>
                <Link className="link1" to="/notice"> Mentions Légales</Link>
              </div>           
            </Nav>           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}



             