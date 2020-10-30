import React, { useState } from "react";
import CustomNavbar from "./CustomNavbar";
import CustomFooter from "./CustomFooter";
import Sidebar from "./Sidebar";
import { Button, Card } from "react-bootstrap";
import "../style.css";
import "../css/Dashboard.css";

export default function Dashboard({
  items,
  showButton,
  showImages = false,
  buttonClick,
}) {
  const [selectedItem, setSelectedItem] = useState({
    photo: "",
    name: "Title",
    description: "",
  });

  const setItem = (item) => setSelectedItem(item);

  return (
    <div className="d-flex" style={{ height: "75vh" }}>
      <Sidebar items={items} onClick={setItem} />
      {showImages && selectedItem.photo && (
        <Card className="cardImage" style={{ width: "80vw" }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src={selectedItem.photo}
              style={{ height: "100%" }}
            />
          </Card.Body>
        </Card>
      )}

      <Card style={{ width: "100vw" }}>
        <Card.Body>
          <Card.Text className="d-flex justify-content-center">
            {selectedItem.name}
          </Card.Text>
          <Card.Text
            style={{
              overflowY: "scroll",
              height: "53vh",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {selectedItem.description}
            DANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANKDANK
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
