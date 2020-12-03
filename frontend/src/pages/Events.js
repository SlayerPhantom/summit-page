import React, { useState } from "react";
import DayOneSchedule from "../components/DayOneSchedule";
import DayTwoSchedule from "../components/DayTwoSchedule";
import DayThreeSchedule from "../components/DayThreeSchedule";

import Lottie from "react-lottie";
import { Container, Button } from "react-bootstrap";
import "../css/style.css";
import adventureData from "../images/lotties/adventure.json";

const DAYS = {
  ONE: "02/17/2021",
  TWO: "02/18/2021",
  THREE: "02/19/2021",
};

export default function Events() {
  const adventureLottieData = {
    loop: true,
    autoplay: true,
    animationData: adventureData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [day, setDay] = useState(DAYS["ONE"]);

  const handleSetDay = (day) => setDay(day);

  return (
    <div>
      <div className="background">
        <Container>
          <Container className="row top-section">
            <div className="row vh-75 mb-5 top-section-2">
              <div className="order-md-1 order-2 col-md-6 d-flex justify-content-center align-items-center">
                <Lottie
                  options={adventureLottieData}
                  height={400}
                  width={400}
                />
              </div>
              <div className="main-content col-md-6 order-1 d-flex justify-content-center textBlock">
                <h2>Events</h2>
              </div>
            </div>
          </Container>
        </Container>
      </div>

      <div className="greyBackground">
        <div className="mt-3 mb-3">
          <h3 style={{ textAlign: "center" }}>{day}</h3>
          <Button
            variant="danger"
            className="ml-3"
            onClick={() => handleSetDay(DAYS["ONE"])}
          >
            02/17/2021
          </Button>

          <Button
            variant="danger"
            className="ml-3"
            onClick={() => handleSetDay(DAYS["TWO"])}
          >
            02/18/2021
          </Button>

          <Button
            variant="danger"
            className="ml-3"
            onClick={() => handleSetDay(DAYS["THREE"])}
          >
            02/19/2021
          </Button>
        </div>
      </div>

      {day === DAYS["ONE"] && <DayOneSchedule />}
      {day === DAYS["TWO"] && <DayTwoSchedule />}
      {day === DAYS["THREE"] && <DayThreeSchedule />}
    </div>
  );
}
