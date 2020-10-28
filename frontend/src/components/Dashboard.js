import React, { useState } from "react";
import CustomNavbar from "./CustomNavbar";
import CustomFooter from "./CustomFooter";
import Sidebar from "./Sidebar";
import { Button, Card } from "react-bootstrap";
import "../style.css";

export default function Dashboard({ items, showButton, buttonClick }) {
  const [selectedItem, setSelectedItem] = useState({
    photo: "Title",
    name: "Title",
    description: "",
  });

  const setItem = (item) => setSelectedItem(item);

  return (
    <div className="d-flex" style={{ height: "75vh" }}>
      <Sidebar items={items} onClick={setItem} />
      <Card style={{ width: "90vw" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src="holder.js/100px160"
            style={{ height: "30vh" }}
          />
          <Card.Text style={{ overflowY: "scroll", height: "30vh" }}>
            {selectedItem.name}
            {selectedItem.description}
          </Card.Text>

          {showButton && (
            <div className="d-flex justify-content-center">
              <Button variant="primary" onClick={buttonClick}>
                Go somewhere
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
