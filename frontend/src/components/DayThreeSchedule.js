import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css";
import EventCard from "../components/EventCard";

import pacificaBallroom from "../images/pacificaBallroom.jpg";
import oceanaBallroom from "../images/oceanaBallroom.jpg";
import registrationLobby from "../images/registrationLobby.jpg";
import lobby from "../images/lobby.jpg";
import loews1 from "../images/loews1.jpg";
import loews2 from "../images/loews2.jpg";
import loews3 from "../images/loews3.jpg";
import shuttle from "../images/shuttle.jpeg";
import citywalk from "../images/citywalk.jpg";

export default function DayThreeSchedule() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgb(220,220,220)",
          paddingBottom: "40px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col>
              <EventCard
                photo={oceanaBallroom}
                title={"AMA with Justin, Dave & Eddie"}
                when={"9:00 am"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={oceanaBallroom}
                title={"Breakout Session"}
                when={"10:00 am"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={oceanaBallroom}
                title={"Workshop"}
                when={"11:00 am"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5 justify-content-center">
            <Col>
              <EventCard
                photo={loews1}
                title={"Open Lunch Break"}
                when={"12:00 pm"}
                where={"N/A"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={oceanaBallroom}
                title={"Breakout Session"}
                when={"2:00 pm"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={pacificaBallroom}
                title={"Breakout Session"}
                when={"2:00 pm"}
                where={"Room B - Pacifica 7-12"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5 justify-content-center">
            <Col>
              <EventCard
                photo={loews2}
                title={"Intermission"}
                when={"3:00 pm"}
                where={"N/A"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={oceanaBallroom}
                title={"Breakout Session"}
                when={"3:30 pm"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={pacificaBallroom}
                title={"Breakout Session"}
                when={"3:30 pm"}
                where={"Room B - Pacifica 7-12"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5 justify-content-center">
            <Col>
              <EventCard
                photo={loews3}
                title={"Session"}
                when={"5:30 pm"}
                where={"N/A"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={shuttle}
                title={"Shuttles to Dinner"}
                when={"6:30 pm"}
                where={"Bus Loop"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={loews3}
                title={"uBreakiFix Dinner"}
                when={"7:00 pm"}
                where={"N/A"}
              ></EventCard>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
