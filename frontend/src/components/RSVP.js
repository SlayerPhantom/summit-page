import React, { useState } from "react";
import axios from "axios";

export default function RSVP({ id_token, googleId }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = { firstName, lastName, email, googleId };
    try {
      const res = await axios.post("http://localhost:5000/rsvp", payload, {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      });
      console.log(res.json());
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Submit form</button>
      </form>
    </div>
  );
}
