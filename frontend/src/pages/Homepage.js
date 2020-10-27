import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import GoogleAuth from "../components/GoogleAuth";
import { Container, Button } from "react-bootstrap";
import Lottie from "react-lottie";
import computerData from "../images/sitting_at_computer.json";
import "../style.css";

export default function Homepage() {
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
      <CustomNavbar />

      <Container>
        <Container className="row mt-3 top-section">
          <div class="row vh-75 mb-5 top-section-2">
            <div class="order-md-1 order-2 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <Lottie options={computerLottieData} height={400} width={400} />
            </div>
            <div class="main-content col-md-6 col-12 order-md-2 order-1 d-flex justify-content-center">
              <h1
                className="text-center black"
                style={{ fontFamily: "circular" }}
              >
                Annual Summit
              </h1>
              <h5 class="text-center black" style={{ fontFamily: "circular" }}>
                Another night, another dream but always you It's like a vision
                of love that seems to be true Another night another dream but
                always you In the night I dream of love so true Just another
                night, another vision of love You feel joy, you feel pain, 'cuz
                nothing will be the same Just another night is all that it takes
                To understand the difference between lovers and fakes
              </h5>
              <GoogleAuth showLogin loginText={"Click Here to Get Access"} />
            </div>
          </div>
        </Container>
      </Container>

      <CustomFooter />
    </div>
  );
}
