import React, { useState } from "react";
import { Card, Modal, Button, ListGroup, ListGroupItem } from "react-bootstrap";

export default function EventCard({ photo, title, text, host, when, where }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Card>
      <Card.Img variant="top" src={photo} style={{ height: "15rem" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* {text && <Card.Text>{text}</Card.Text>} */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{where}</ListGroupItem>
        <ListGroupItem>{when} </ListGroupItem>
      </ListGroup>
    </Card>
  );
}
