import React from "react";
import { Container, Card, Image, Col, Row } from "react-bootstrap";
import "../style.css";
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
    <div style={{ backgroundColor: "rgb(220,220,220)", paddingBottom: "40px" }}>
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

      <Container className="justify-content-center mt-3">
        <h3 className="text-center mb-4">Title Sponsors</h3>

        <Row className="justify-content-center mb-5">
          <Col xs={5} className="d-flex justify-content-center">
            <Image style={{ width: "300px" }} src={samsungLogo} rounded />
          </Col>
        </Row>

        <h3 className="text-center mb-4">Diamond Sponsors</h3>

        <Row className="justify-content-center mb-5">
          <Col xs={5} className="d-flex justify-content-center">
            <Image style={{ width: "300px" }} src={googleLogo} rounded />
          </Col>
        </Row>

        <h3 className="text-center mb-4">Vendor Fair Sponsors</h3>

        <Row className="justify-content-center mb-5">
          <Col xs={5} className="d-flex justify-content-center">
            <Image style={{ width: "300px" }} src={voicecommLogo} rounded />
          </Col>
        </Row>

        <h3 className="text-center mb-4">Platinum Sponsors</h3>

        <Row className="justify-content-center mb-5">
          <Col xs={5} className="d-flex justify-content-center"></Col>
        </Row>

        <h3 className="text-center mb-4">Gold Sponsors</h3>

        <Row className="justify-content-center mb-5">
          <Col xs={5} className="d-flex justify-content-center"></Col>
        </Row>
      </Container>
    </div>
  );
}
