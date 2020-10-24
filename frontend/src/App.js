import React from "react";
import CustomNavbar from "./components/CustomNavbar";
import { Container, Nav } from "react-bootstrap";
import "./style.css";
import { Navbar } from "react-bootstrap";
import Lottie from "react-lottie";
import animationData from "./images/analytics.json";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <CustomNavbar />

      <Container>
        <Container>
          <div class="row vh-100 mt-5 top-section">
            <div class="main-content col-md-6 col-12 d-flex justify-content-center">
              <h1 class="blue">uBreakiFix Annual Summit</h1>
              <h5 class="dark-blue">
                I'm a Barbie girl in the Barbie world Life in plastic, it's
                fantastic! You can brush my hair, undress me everywhere
                Imagination, life is your creation Come on, Barbie, let's go
                party! I'm a Barbie girl in the Barbie world Life in plastic,
                it's fantastic! You can brush my hair, undress me everywhere
                Imagination, life is your creation I'm a blond bimbo girl in a
                fantasy world Dress me up, make it tight, I'm your dolly You're
                my doll, rock'n'roll, feel the glamour in pink, Kiss me here,
                touch me there, hanky panky... You can touch, you can play, if
                you say, "I'm always yours."
              </h5>
            </div>
            <div class="my-3 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default App;
