import React, { useState } from "react";
import { Card, Modal, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "../style.css";

export default function SpeakerCard({ photo, name, text }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Card className="ml-5" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <div className="d-flex justify-content-center">
            <Card.Title>{name}</Card.Title>
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="danger" onClick={handleShow}>
              Learn More
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <div className="d-flex justify-content-center text-center">
          <Modal.Header>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
        </div>

        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
