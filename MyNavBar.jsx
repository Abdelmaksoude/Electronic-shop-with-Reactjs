import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
export function MyNavBar({count})
{
    return(
        <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Electronic shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
            <Nav.Link href="#" aria-readonly>Num Of Product Have Selled : <h6 className="count">{count}</h6></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}