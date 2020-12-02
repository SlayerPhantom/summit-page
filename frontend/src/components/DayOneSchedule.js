import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/style.css";
import "../css/DaySchedule.css";
import EventCard from "../components/EventCard";

import oceanaBallroom from "../images/locations/oceanaBallroom.jpg";
import lobby from "../images/locations/lobby.jpg";

import citywalk from "../images/locations/citywalk.jpg";
import promenade from "../images/locations/promenade.jpg";

export default function DayOneSchedule() {
  return (
    <div>
      <div className="scheduleWrapper">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <EventCard
                photo={lobby}
                title={"Check in & Badge Pick-up"}
                when={"6:00 pm"}
                where={"Registration South Desk"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={oceanaBallroom}
                title={"Awards ceremony Dinner"}
                when={"7:00 pm"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col>
              <EventCard
                photo={promenade}
                title={"Reception"}
                when={"8:00 pm"}
                where={"Promenade Deck"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={4}>
              <EventCard
                photo={citywalk}
                title={"Ferry to Universal Citywalk"}
                when={"10:00 pm"}
                where={"Off of Promenade Deck"}
              ></EventCard>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
