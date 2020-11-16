import React from "react";
import { Container, Button } from "react-bootstrap";
import computerData from "../images/sitting_at_computer.json";
import "../style.css";
import venueImg from "../images/venue.jpg";

export default function Video(props) {
  const computerLottieData = {
    loop: true,
    autoplay: true,
    animationData: computerData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div style={{ backgroundColor: "rgb(220,220,220)" }}>
        <img
          src={venueImg}
          alt="venue image"
          style={{ width: "360px", height: "320px" }}
        />

        <div className="container py-5 d-flex justify-content-center align-items-center flex-column">
          <h2>Loews Royal Pacific Resort at Universal Orlando</h2>

          <h4 className="col-lg-10 col-12 black text-center">
            6300 Hollywood Way Orlando, FL 32819
            <br /> (407) 503-3000
            <br /> FEBRUARY 17-19, 2020
          </h4>

          <h4 className="col-lg-10 col-12 black text-center">
            The Loews Royal Pacific Resort is Universal Orlando Resort's
            Polynesian paradise. This tranquil retreat has several on-site
            restaurants as well as a water taxi that brings guests right into
            Universal Citywalk. This venue features a lagoon-style swimming
            pool, a complimentary fitness facility, and easy access to
            everything that Universal Studios has to offer.
          </h4>

          <Button href="https://res.windsurfercrs.com/ibe/details.aspx?propertyid=14843&nights=3&checkin=02/17/2020&group=GNRH2G2">
            Book Your Stay
          </Button>
        </div>
      </div>
    </div>
  );
}
