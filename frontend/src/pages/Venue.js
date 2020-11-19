import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import "../style.css";
import Lottie from "react-lottie";
import consultData from "../images/consolutation.json";
import Background from "../images/bg.png";

import venueImg from "../images/venue.jpg";

export default function Speakers() {
  const speakerData = {
    loop: true,
    autoplay: true,
    animationData: consultData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
            <div className="order-md-1 order-2 col-md-6 col-12 d-flex justify-content-center align-items-center">
              {/* <Lottie options={speakerData} height={400} width={400} /> */}
              <img
                src={venueImg}
                alt="venue image"
                style={{ width: "360px", height: "320px" }}
              />
            </div>
            Venue
          </Container>
        </Container>
      </div>

      <Container className="py-5 d-flex justify-content-center align-items-center flex-column">
        <Container>
          <div className="container d-flex justify-content-center align-items-center flex-column">
            <h2 className="mb-3">
              Loews Royal Pacific Resort at Universal Orlando
            </h2>

            <h4 className="col-lg-10 col-12 black text-center">
              6300 Hollywood Way Orlando, FL 32819
              <br /> (407) 503-3000
              <br /> February 17-19, 2020
            </h4>

            <h5 className="mt-5 col-lg-10 col-12 black text-center">
              The Loews Royal Pacific Resort is Universal Orlando Resort's
              Polynesian paradise. This tranquil retreat has several on-site
              restaurants as well as a water taxi that brings guests right into
              Universal Citywalk. This venue features a lagoon-style swimming
              pool, a complimentary fitness facility, and easy access to
              everything that Universal Studios has to offer.
            </h5>

            <Button
              variant="danger"
              className="mt-4"
              href="https://res.windsurfercrs.com/ibe/details.aspx?propertyid=14843&nights=3&checkin=02/17/2020&group=GNRH2G2"
            >
              Book Your Stay
            </Button>
          </div>
        </Container>
      </Container>
    </div>
  );
}
