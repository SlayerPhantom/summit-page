import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "../style.css";
import Lottie from "react-lottie";
import consultData from "../images/consolutation.json";
import Background from "../images/bg.png";

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
              <Lottie options={speakerData} height={400} width={400} />
            </div>
            Speakers
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
