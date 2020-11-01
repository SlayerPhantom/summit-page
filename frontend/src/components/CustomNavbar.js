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
    // <Navbar className="header-navbar navbar navbar-expand-lg navbar-dark d-flex justify-content-between align-items-top">
    //   <Navbar.Brand>
    //     <div className="row">
    //       <h2 className="col-xs ml-3">UBREAKIFIX</h2>
    //       <h4 className="col-xs ml-3 pt-2">Events</h4>
    //       <h4 className="col-xs ml-3 pt-2">Speakers</h4>
    //     </div>
    //   </Navbar.Brand>
    // </Navbar>

    // <Navbar sticky="top" className="header">
    //   <Navbar.Brand>
    //     <div className="row ml-1">
    //       <h4 className="col-xs white">UBREAKIFIX</h4>

    //       <h4 className="col-xs ml-3 white">Events</h4>
    //       <h4 className="col-xs ml-3 white">Speakers</h4>
    //     </div>
    //   </Navbar.Brand>
    // </Navbar>

    <Navbar className="header" expand="lg">
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

        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
