import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Container,
  FormControl,
  Button,
} from "react-bootstrap";
import "../style.css";
import "../css/CustomNavbar.css";

export default function CustomNavbar() {
  return (
    // <Navbar className="header" expand="lg">
    <Navbar style={{ backgroundColor: "#DB3A34", height: "10vh" }} expand="lg">
      <Navbar.Brand className="ml-5" href="/">
        UBreakIFix
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Events">
            <div className="white">Events</div>
          </Nav.Link>
          <Nav.Link href="/Speakers">
            <div className="white">Speakers</div>
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
