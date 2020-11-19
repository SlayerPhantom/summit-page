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

export default function DayTwoSchedule() {
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
                photo={lobby}
                title={"Badge & Bag Pickup"}
                when={"8:45 am"}
                where={"Registration South Desk"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={pacificaBallroom}
                title={"Vendor Mingle"}
                when={"9:00 am"}
                where={"Room B - Pacifica"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={oceanaBallroom}
                title={"Keynote"}
                when={"10:00 am"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={4}>
              <EventCard
                photo={loews1}
                title={"Lunch Break"}
                when={"12:00 pm"}
                where={"N/A"}
              ></EventCard>
            </Col>

            <Col xs={4}>
              <EventCard
                photo={oceanaBallroom}
                title={"Keynote"}
                when={"1:00 pm"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col xs={4}>
              <EventCard
                photo={loews2}
                title={"Intermission"}
                when={"3:00 pm"}
                where={"N/A"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={4}>
              <EventCard
                photo={loews3}
                title={"Lunch Break"}
                when={"12:00 pm"}
                where={"N/A"}
              ></EventCard>
            </Col>

            <Col xs={4}>
              <EventCard
                photo={oceanaBallroom}
                title={"Keynote"}
                when={"1:00 pm"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col xs={4}>
              <EventCard
                photo={loews1}
                title={"Intermission"}
                when={"3:00 pm"}
                where={"N/A"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={4}>
              <EventCard
                photo={oceanaBallroom}
                title={"Workshop"}
                when={"3:30 pm"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col xs={4}>
              <EventCard
                photo={pacificaBallroom}
                title={"Vendor Fair"}
                when={"4:30 pm"}
                where={"Room B - Pacifica 7-12"}
              ></EventCard>
            </Col>

            <Col xs={4}>
              <EventCard
                photo={pacificaBallroom}
                title={"Sponsor Raffles"}
                when={"6:00 pm"}
                where={"Room B - Pacifica 7-12"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={4}>
              <EventCard
                photo={citywalk}
                title={"Ferry to Universal Citywalk"}
                when={"8:00 pm"}
                where={"Off to Promenade Deck"}
              ></EventCard>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
