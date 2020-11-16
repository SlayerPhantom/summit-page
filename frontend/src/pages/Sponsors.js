import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Container, Carousel } from "react-bootstrap";
import "../style.css";
import EventCard from "../components/EventCard";
import Background from "../images/bg.png";

import googleLogo from "../images/sponsors/googleLogo.png"; // title sponsors
import samsungLogo from "../images/sponsors/samsungLogo.png"; // diamond sponsor
import voicecommLogo from "../images/sponsors/voicecommLogo.png"; // vendor fair sponsor

export default function Events() {
  const style = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  };

  return (
    <div>
      <div style={style}>
        <Container>
          <Container
            className="row top-section justify-content-center align-middle"
            style={{
              height: "60vh",
              lineHeight: "60vh",
              textAlign: "center",
              color: "white",
              fontSize: "5rem",
              fontWeight: "bold",
            }}
          >
            Sponsors
          </Container>
        </Container>
      </div>

      <div
        style={{ backgroundColor: "rgb(220,220,220)", paddingBottom: "40px" }}
      >
        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block w-50"
                src={samsungLogo}
                alt="Title Sponsor: Samsung"
              />
            </div>

            <Carousel.Caption>
              <h3>Title Sponsor</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block w-50"
                src={googleLogo}
                alt="DiamondSponsor: Google"
              />
            </div>

            <Carousel.Caption>
              <h3>Diamond Sponsor</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
