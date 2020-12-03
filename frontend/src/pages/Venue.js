import React from "react";

import { Container, Button } from "react-bootstrap";
import "../css/style.css";
import venueImg from "../images/locations/venue.jpg";

export default function Speakers() {
  return (
    <div> 
      <div className="background">
        <Container>
          <Container className="row top-section">
            <div className="row vh-75 mb-5 top-section-2">
              <div className="order-md-1 order-2 col-md-6 d-flex justify-content-center align-items-center">
                <img src={venueImg} className="image" alt="venue" />
              </div>
              <div className="main-content col-md-6 order-1 d-flex justify-content-center textBlock">
                <h2>Venue</h2>
              </div>
            </div>
          </Container>
        </Container>
      </div>

      <Container className="mt-3 mb-3 d-flex justify-content-center align-items-center flex-column textBlock">
        <h3 className="mb-3">
          Loews Royal Pacific Resort at Universal Orlando
        </h3>
        

        <h4 className="col-lg-10 col-12 black text-center">
          6300 Hollywood Way Orlando, FL 32819
          <br /> (407) 503-3000
          <br /> February 17-19, 2020
        </h4>

        <h5 className="mt-5 col-lg-10 col-12 black text-center">
          The Loews Royal Pacific Resort is Universal Orlando Resort's
          Polynesian paradise. This tranquil retreat has several on-site
          restaurants as well as a water taxi that brings guests right into
          Universal Citywalk. This venue features a lagoon-style swimming pool,
          a complimentary fitness facility, and easy access to everything that
          Universal Studios has to offer.
        </h5>

        <Button
          variant="danger"
          className="mt-4"
          target="_blank"
          href="https://res.windsurfercrs.com/ibe/details.aspx?propertyid=14843&nights=3&checkin=02/17/2020&group=GNRH2G2"
        >
          Book Your Stay
        </Button>
      </Container>
    </div>
  );
}
