import React, { useState } from "react";
import axios from "axios";
import { FormControl, Button, TextField } from '@material-ui/core';

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
      <FormControl>
          <TextField id="first-name-input" label="First Name" onChange={(e) => setFirstName(e.target.value)}>First Name</TextField>
          <TextField id="last-name-input" label="Last Name" onChange={(e) => {setLastName(e.target.value)}}>Last Name</TextField>
          <TextField id="email-input" label="Email" onChange={(e) => {setEmail(e.target.value)}}>Email address</TextField>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </FormControl>
  );
}
