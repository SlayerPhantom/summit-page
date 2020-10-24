import React from "react";
import CustomNavbar from "./components/CustomNavbar";
import { Container, Nav } from "react-bootstrap";
import "./style.css";
import { Navbar, Button } from "react-bootstrap";
import Lottie from "react-lottie";
import graphData from "./images/analytics.json";
import computerData from "./images/sitting_at_computer.json";

function App() {
  const graphLottieData = {
    loop: true,
    autoplay: true,
    animationData: graphData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
          <div className="main-content col-md-6 col-12 d-flex justify-content-center">
            <h1 className="blue">uBreakiFix Annual Summit</h1>
            <h5 className="dark-blue">
              I'm a Barbie girl in the Barbie world Life in plastic, it's
              fantastic! You can brush my hair, undress me everywhere
              Imagination, life is your creation Come on, Barbie, let's go
              party! I'm a Barbie girl in the Barbie world Life in plastic, it's
              fantastic! You can brush my hair, undress me everywhere
              Imagination, life is your creation I'm a blond bimbo girl in a
              fantasy world Dress me up, make it tight, I'm your dolly You're my
              doll, rock'n'roll, feel the glamour in pink, Kiss me here, touch
              me there, hanky panky... You can touch, you can play, if you say,
              "I'm always yours."
            </h5>
            <Button className="my-2 btn btn-blue mx-3">
              Click Here To Get Access
            </Button>
          </div>
          <div className="my-3 col-md-6 col-12 d-flex justify-content-center align-items-center">
            <Lottie options={graphLottieData} height={400} width={400} />
          </div>
        </Container>

        <Container>
          <div class="row vh-100 mb-5 top-section-2">
            <div class="order-md-1 order-2 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <Lottie options={computerLottieData} height={400} width={400} />
            </div>
            <div class="main-content col-md-6 col-12 order-md-2 order-1 d-flex justify-content-center">
              <h5 class="text-center dark-blue">
                Another night, another dream but always you It's like a vision
                of love that seems to be true Another night another dream but
                always you In the night I dream of love so true Just another
                night, another vision of love You feel joy, you feel pain, 'cuz
                nothing will be the same Just another night is all that it takes
                To understand the difference between lovers and fakes
              </h5>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default App;
