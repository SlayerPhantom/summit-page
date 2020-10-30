import React, { useState, useEffect } from "react";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import Dashboard from "../components/Dashboard";
import GoogleAuth from "../components/GoogleAuth";
import { Modal, Button } from "react-bootstrap";
import "../style.css";

const items = [{ name: "January 14, 1998", description: "Testing of a del" }];

export default function Homepage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => console.log(showModal), [showModal]);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <CustomNavbar />

      <Dashboard
        items={items}
        showButton
        showSidebarButton
        sidebarButtonOnclick={toggleModal}
      />

      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Start: <input type="text" />
          </div>
          <div>
            Ends: <input type="text" />
          </div>
          <div>
            Description:{" "}
            <textarea
              rows="4"
              cols="50"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={toggleModal}>
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>

      <CustomFooter />
    </div>
  );
}
