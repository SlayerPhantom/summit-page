import React from "react";

import { Container, Image, Col, Row } from "react-bootstrap";
import "../css/style.css";
import "../css/Sponsors.css";

import googleLogo from "../images/sponsors/googleLogo.png"; // title sponsors
import samsungLogo from "../images/sponsors/samsungLogo.png"; // diamond sponsor
import voicecommLogo from "../images/sponsors/voicecommLogo.png"; // vendor fair sponsor

export default function Events() {
  return (
    <div>
      <div className="background">
        <Container>
          <Container className="row top-section">
            <div className="row vh-75 mb-5 top-section-2">
              <div className="order-md-1 order-2 col-md-6 d-flex justify-content-center align-items-center">
                {/* <Lottie options={speakerData} height={400} width={400} /> */}
              </div>
              <div className="main-content col-md-6 order-1 d-flex justify-content-center textBlock">
                <h2>Sponsors</h2>
              </div>
            </div>
          </Container>
        </Container>
      </div>

      <Container className="justify-content-center mt-3">
        <h3 className="text-center mb-4">Title Sponsors</h3>

        <Row className="justify-content-center mb-5">
          <Col xs={5} className="d-flex justify-content-center">
            <Image className="sponsorLogo" src={samsungLogo} rounded />
          </Col>
        </Row>

        <h3 className="text-center mb-4">Diamond Sponsors</h3>

        <Row className="justify-content-center mb-5">
          <Col xs={5} className="d-flex justify-content-center">
            <Image className="sponsorLogo" src={googleLogo} rounded />
          </Col>
        </Row>

        <h3 className="text-center mb-4">Vendor Fair Sponsors</h3>

        <Row className="justify-content-center mb-5">
          <Col xs={5} className="d-flex justify-content-center">
            <Image className="sponsorLogo" src={voicecommLogo} rounded />
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
