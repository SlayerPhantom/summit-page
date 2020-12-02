import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import "../css/style.css";
import "../css/CustomNavbar.css";

// const displayUser = () => {
//   const user = localStorage.getItem("user");
//   if (user) return user.name;
//   else return null;
// };

export default function CustomNavbar() {
  return (
    <Navbar className="navbarWrapper" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <Nav.Link href="/" className="navbarImageWrapper">
          <img
            src="https://d1zmiyu61cpipt.cloudfront.net/assets/images/ubif_logo_dark.svg"
            alt="logo"
            className="navbarImage"
          />
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/events" className="navbarItem">
            Events
          </Nav.Link>
          <Nav.Link href="/speakers" className="navbarItem">
            Speakers
          </Nav.Link>
          <Nav.Link href="/venue" className="navbarItem">
            Venue
          </Nav.Link>
          <Nav.Link href="/registerevents" className="navbarItem">
            Sign up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
