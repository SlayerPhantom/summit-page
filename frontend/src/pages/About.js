import React from "react";
import Dashboard from "../components/Dashboard";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";

const items = [
  {
    photo: "https://i.imgur.com/Kkcfhm7.jpg",
    name: "John",
    description: "JOHNN",
  },
  {
    photo: "https://i.imgur.com/bd2EhI2.jpg",
    name: "Billy",
    description: "BILLYY",
  },
  {
    photo: "https://i.imgur.com/WHSGElT.jpg",
    name: "Joel",
    description: "JOELL",
  },
];

export default function About() {
  return (
    <div>
      <CustomNavbar />

      <Dashboard
        items={items}
        showButton
        buttonClick={() => console.log("DANK")}
      />

      <CustomFooter />
    </div>
  );
}
