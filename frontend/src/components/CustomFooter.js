import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "../style.css";
import "../css/CustomFooter.css";
import {
  FaTwitterSquare,
  FaYoutubeSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function CustomFooter() {
  return (
    <footer className="footer-navbar pt-4 vw-100">
      <div className="order-md-1 order-2 col-md-12 mb-3 d-flex justify-content-center white">
        <div className="justify-content-center">
          <a
            className="white links"
            href="https://www.youtube.com/user/ubreakifixco"
          >
            <FaYoutubeSquare size="2em" />
          </a>
          <a className="white links" href="https://www.facebook.com/ubreakifix">
            <FaFacebookSquare size="2em" />
          </a>
          <a className="white links" href="https://twitter.com/ubreakifix">
            <FaTwitterSquare size="2em" />
          </a>
          <a
            className="white links"
            href="https://www.instagram.com/ubreakifix/"
          >
            <FaInstagramSquare size="2em" />
          </a>
        </div>
      </div>
    </footer>
  );
}
