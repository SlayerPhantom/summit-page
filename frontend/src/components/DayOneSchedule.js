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
            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={lobby}
                title={"Check in & Badge Pick-up"}
                when={"6:00 pm"}
                where={"Registration South Desk"}
              ></EventCard>
            </Col>

            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={oceanaBallroom}
                title={"Awards ceremony Dinner"}
                when={"7:00 pm"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={promenade}
                title={"Reception"}
                when={"8:00 pm"}
                where={"Promenade Deck"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={12} md={4} className="eventCardWrapper">
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
