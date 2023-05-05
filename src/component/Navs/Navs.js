import React from 'react';
import './Navs.css';
import { Navbar , Nav , Container } from 'react-bootstrap';


const Navs = ()=>{
    return(
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">Pharmacy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#home">Products</Nav.Link>
                <Nav.Link href="#home">Cosmetic Products</Nav.Link>
                <Nav.Link href="#home">Staff</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <Nav.Link href="#link">Log in </Nav.Link>

            </Nav>
           
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}


export default Navs;