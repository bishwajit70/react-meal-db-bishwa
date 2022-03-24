import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbars.css'

const Navbars = (props) => {
  return (
    <Navbar className='fixed-top' bg="light" expand="lg">
      <Container className=''>
        <Navbar.Brand href="#home">Meal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Shop</Nav.Link>
            <Nav.Link href="#link">Cart <sup>{props.count}</sup></Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;