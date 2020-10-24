import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "../style.css";

export default function CustomNavbar() {
  return (
    <Navbar className="header-navbar navbar navbar-expand-lg navbar-dark d-flex justify-content-between align-items-top w-100">
      <Navbar.Brand href="#Home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
}
