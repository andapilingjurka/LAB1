import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const UserLayout = () => {
  return (
    <Navbar className='navbar' expand="lg">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/login">Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default UserLayout;
