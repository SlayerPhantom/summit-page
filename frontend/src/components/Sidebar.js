import React, { useState } from "react";
import { Tab, Nav, Button, Modal, ListGroup } from "react-bootstrap";
// import Conversations from "./Conversations";
// import Contacts from "./Contacts";
// import NewContactModal from "./NewContactModal";
// import NewConversationModal from "./NewConversationModal";

const EVENTS_KEY = "events";

export default function Sidebar({ items, onClick }) {
  const [activeKey, setActiveKey] = useState(EVENTS_KEY);
  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div style={{ width: "15rem" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        {/* <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={EVENTS_KEY}>EVENTS</Nav.Link>
          </Nav.Item>
        </Nav> */}
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={EVENTS_KEY}>
            <ListGroup variant="flush" className="border-bottom">
              {items.map((item, idx) => (
                <ListGroup.Item key={idx} action onClick={() => onClick(item)}>
                  {item.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}
