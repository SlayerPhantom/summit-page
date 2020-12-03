import React, { useState } from "react";
import GoogleAuth from "../components/GoogleAuth";
import { GoogleLogout } from "react-google-login";
import { Container } from "react-bootstrap";
import Lottie from "react-lottie";
import computerData from "../images/lotties/sitting_at_computer.json";
import ReactPlayer from "react-player";

import "../css/style.css";
import "../css/Homepage.css";

export default function Homepage() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")
  );

  const computerLottieData = {
    loop: true,
    autoplay: true,
    animationData: computerData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("email");
    localStorage.removeItem("familyName");
    localStorage.removeItem("givenName");
    localStorage.removeItem("googleId");
    localStorage.removeItem("imageUrl");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("isRegistered");
    setIsAuthenticated(false);
    window.location.replace("/");
  };

  return (
    <div>
      <div className="background">
        <Container>
          <Container className="row top-section">
            <div className="row vh-75 mb-5 top-section-2">
              <div className="order-md-1 order-2 col-md-6 col-12 d-flex justify-content-center align-items-center">
                <Lottie options={computerLottieData} height={400} width={400} />
              </div>
              <div className="main-content col-md-6 col-12 order-md-2 order-1 d-flex justify-content-center textBlock headerText">
                <h1>uBreakiFix Annual Summit</h1>
                <h5>
                  Join uBreakiFix for the 2020-2021 annual summit. This is a
                  weekend-long event where employees will be able to network
                  with each, attend workshops, and attend keynote speeches led
                  by our upper management.
                </h5>
                <div className="mt-3 d-flex justify-content-center">
                  {isAuthenticated ? (
                    <GoogleLogout
                      clientId="899787207644-st7cehta2q31e1sp8804vg0q8ro5t94s.apps.googleusercontent.com"
                      buttonText="Signout of google"
                      onLogoutSuccess={logout}
                    ></GoogleLogout>
                  ) : (
                    <GoogleAuth />
                  )}
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </div>

      <div className="greyBackground">
        <Container className="py-5 d-flex justify-content-center align-items-center flex-column">
          <Container className="videoPlayer">
            <ReactPlayer url="https://youtu.be/SB0J5GQZWE4" />
          </Container>
        </Container>
      </div>
    </div>
  );
}
