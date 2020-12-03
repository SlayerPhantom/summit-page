import React from "react";
import { Container, Button, Form } from "react-bootstrap";

export default function RegisterEdit({
  fname,
  lname,
  email,
  fnameOnclick,
  lnameOnclick,
  emailOnclick,
  register,
}) {
  return (
    <Container>
      <h1 className="mb-3 text-center">Already Registered!</h1>
      <Form>
        <Form.Group controlId="formFirstName" className="formLabel">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="First Name"
            value={fname}
            onChange={fnameOnclick}
            className="formValue"
          />
        </Form.Group>

        <Form.Group controlId="formLastName" className="formLabel">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Last Name"
            value={lname}
            onChange={lnameOnclick}
            className="formValue"
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="formLabel">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={emailOnclick}
            className="formValue"
          />
          <Form.Text className="text-muted">
            We'll never share your personal information with anyone else.
          </Form.Text>
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="danger" type="submit" onClick={register}>
            Edit
          </Button>
        </div>
      </Form>
    </Container>
  );
}
