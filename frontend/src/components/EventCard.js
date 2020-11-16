import React, { useState } from "react";
import { Card, Modal, Button, ListGroup, ListGroupItem } from "react-bootstrap";

export default function EventCard({ photo, title, text, host, when }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      {/* <Card className="ml-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{shortText}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card> */}

      <Card className="ml-5" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <div className="d-flex justify-content-center">
            <Card.Title>{title}</Card.Title>
          </div>
          {/* <Card.Text>{text}</Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Host: {host}</ListGroupItem>
          <ListGroupItem>When: {when}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <div className="d-flex justify-content-center">
            <Button
              variant="danger"
              style={{ width: "50%" }}
              onClick={handleShow}
            >
              More Info
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <div className="d-flex justify-content-center text-center">
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        </div>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
