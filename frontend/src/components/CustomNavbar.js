import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "../style.css";
import "../css/CustomNavbar.css";

export default function CustomNavbar() {
  return (
    <Navbar className="header-navbar navbar navbar-expand-lg navbar-dark d-flex justify-content-between align-items-top">
      <Navbar.Brand href="#Home">
        <div className="row ml-2">
          <h2
            className="black"
            style={{ margin: "0", padding: "0", fontFamily: "gotham" }}
          >
            UBREAK
          </h2>
          <h2
            className="white"
            style={{ margin: "0", padding: "0", fontFamily: "gotham" }}
          >
            IFIX
          </h2>
        </div>
      </Navbar.Brand>
    </Navbar>
  );
}
