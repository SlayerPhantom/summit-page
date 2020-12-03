import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/style.css";
import "../css/DaySchedule.css";
import EventCard from "../components/EventCard";

import pacificaBallroom from "../images/locations/pacificaBallroom.jpg";
import oceanaBallroom from "../images/locations/oceanaBallroom.jpg";
import loews1 from "../images/locations/loews1.jpg";
import loews2 from "../images/locations/loews2.jpg";
import loews3 from "../images/locations/loews3.jpg";
import shuttle from "../images/locations/shuttle.jpeg";

export default function DayThreeSchedule() {
  return (
    <div>
      <div className="scheduleWrapper">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={oceanaBallroom}
                title={"AMA with Justin, Dave & Eddie"}
                when={"9:00 am"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={oceanaBallroom}
                title={"Breakout Session"}
                when={"10:00 am"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={oceanaBallroom}
                title={"Workshop"}
                when={"11:00 am"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5 justify-content-center">
            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={loews1}
                title={"Open Lunch Break"}
                when={"12:00 pm"}
                where={"N/A"}
              ></EventCard>
            </Col>

            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={oceanaBallroom}
                title={"Breakout Session"}
                when={"2:00 pm"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={pacificaBallroom}
                title={"Breakout Session"}
                when={"2:00 pm"}
                where={"Room B - Pacifica 7-12"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5 justify-content-center">
            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={loews2}
                title={"Intermission"}
                when={"3:00 pm"}
                where={"N/A"}
              ></EventCard>
            </Col>

            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={oceanaBallroom}
                title={"Breakout Session"}
                when={"3:30 pm"}
                where={"Room A - Oceana Grand Ballroom"}
              ></EventCard>
            </Col>

            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={pacificaBallroom}
                title={"Breakout Session"}
                when={"3:30 pm"}
                where={"Room B - Pacifica 7-12"}
              ></EventCard>
            </Col>
          </Row>

          <Row className="mt-5 justify-content-center">
            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={loews3}
                title={"Session"}
                when={"5:30 pm"}
                where={"N/A"}
              ></EventCard>
            </Col>

            <Col xs={12} md={4} className="eventCardWrapper">
              <EventCard
                photo={shuttle}
                title={"Shuttles to Dinner"}
                when={"6:30 pm"}
                where={"Bus Loop"}
              ></EventCard>
            </Col>

            <Col xs={12} md={4} className="eventCardWrapper">
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
