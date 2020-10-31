import React, { useState } from "react";
import { Card, Modal, Button, ListGroup, ListGroupItem } from "react-bootstrap";

export default function SpeakerCard({ photo, name, text }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Card className="ml-5" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary" onClick={handleShow}>
            Learn More
          </Button>
        </Card.Body>
      </Card>

      {/* <Card className="ml-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Host: {host}</ListGroupItem>
          <ListGroupItem>When: {when}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" onClick={handleShow}>
            RSVP
          </Button>
        </Card.Body>
      </Card> */}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
