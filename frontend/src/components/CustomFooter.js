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
import { BottomNavigation, BottomNavigationAction, Typography} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function CustomFooter() {
  const iconStyle = { color: 'white' };
  return (
    <div className="Bottom-Nav" style={{backgroundColor: 'rgb(33,26,30)', paddingTop: '20px', paddingBottom: '10px'}}>
      <Typography variant="h4" style={{textAlign: 'center', color: 'white'}}>Contact Us</Typography>
      <BottomNavigation style={{backgroundColor: 'rgb(33,26,30)'}}>
        <BottomNavigationAction style={iconStyle} label="Youtube" value="Youtube" href="https://www.youtube.com/user/ubreakifixco" icon={<YouTubeIcon />} />
        <BottomNavigationAction style={iconStyle} label="Facebook" value="Facebook" href="https://www.facebook.com/ubreakifix" icon={<FacebookIcon />} />
        <BottomNavigationAction style={iconStyle} label="Twitter" value="Twitter" href="https://twitter.com/ubreakifix" icon={<TwitterIcon />} />
      </BottomNavigation>
    </div>
  );
}
/*
    <footer className="page-footer footer-navbar font-small navbar pt-4">
      <div className="row vw-100 d-flex justify-content-between align-items-center">
    <div className="order-md-1 order-2 col-md-12 mb-3 d-flex justify-content-center align-items-center white footer-links">
      <h2 className="white">UBREAKIFIX</h2>
      <div className="row d-flex justify-content-center">
        <a
          className="white links"
          href="https://www.youtube.com/user/ubreakifixco"
        >
          <FaYoutubeSquare size="2em" />
        </a>
        <a
          className="white links"
          href="https://www.facebook.com/ubreakifix"
        >
          <FaFacebookSquare size="2em" />
        </a>
        <a className="white links" href="https://twitter.com/ubreakifix">
          <FaTwitterSquare size="2em" />
        </a>
      </div>
    </div>
      </div>
    </footer>

    <footer>
      <div className="footerblack">
        <div className="container">
          <div className="row pdn-top-30">
            <div className="order-md-1 order-2 col-md-12 mb-3 d-flex justify-content-center align-items-center white footer-links">
              <h2 className="white">Contact Us</h2>
              <div className="row d-flex justify-content-center">
                <a
                  className="white links"
                  href="https://www.youtube.com/user/ubreakifixco"
                >
                  <FaYoutubeSquare size="2em" />
                </a>
                <a
                  className="white links"
                  href="https://www.facebook.com/ubreakifix"
                >
                  <FaFacebookSquare size="2em" />
                </a>
                <a
                  className="white links"
                  href="https://twitter.com/ubreakifix"
                >
                  <FaTwitterSquare size="2em" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  */