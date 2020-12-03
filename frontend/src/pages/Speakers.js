import React from "react";
import Lottie from "react-lottie";
import consultData from "../images/lotties/consolutation.json";

import { Container, Carousel } from "react-bootstrap";
import "../css/style.css";

import davidReiff from "../images/speakers/davidReiff.jpg";
import eddieTrujillo from "../images/speakers/eddieTrujillo.jpg";
import justinWetherill from "../images/speakers/justinWetherill.jpg";
import mitchPaull from "../images/speakers/mitchPaull.jpg";
import toddEvans from "../images/speakers/toddEvans.jpg";

export default function Speakers() {
  const speakerData = {
    loop: true,
    autoplay: true,
    animationData: consultData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="background">
        <Container>
          <Container className="row top-section">
            <div className="row vh-75 mb-5 top-section-2">
              <div className="order-md-1 order-2 col-md-6 d-flex justify-content-center align-items-center">
                <Lottie options={speakerData} height={400} width={400} />
              </div>
              <div className="main-content col-md-6 order-1 d-flex justify-content-center textBlock">
                <h2>Speakers</h2>
              </div>
            </div>
          </Container>
        </Container>
      </div>

      <Container className="py-5 d-flex justify-content-center align-items-center flex-column mmt-3">
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={justinWetherill}
                alt="Justin Wetherill"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={davidReiff}
                alt="David Reiff"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={eddieTrujillo}
                alt="Eddie Trujillo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={toddEvans} alt="Todd Evans" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={mitchPaull}
                alt="Mitch Paull"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </div>
  );
}
