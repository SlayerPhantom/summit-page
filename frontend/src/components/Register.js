import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import "../css/Register.css";

export default function Register({
  headerText,
  fname,
  lname,
  email,
  fnameOnclick,
  lnameOnclick,
  emailOnclick,
  register,
  registerText,
  showError,
  showSuccess,
}) {
  return (
    <Container>
      {showError && (
        <Alert variant="danger">
          <Alert.Heading>Oh No! Error While Registering</Alert.Heading>
          <p>
            There was an error when registering {fname} {lname}, with email
            address: {email}. Please check your information below and try again.
            Please make sure that if you are registering with an email, to use
            your uBreakiFix account.
          </p>
        </Alert>
      )}

      {showSuccess && (
        <Alert variant="Success">
          <Alert.Heading>Congratulations! You Have Registered!</Alert.Heading>
          <p>
            Feel free to check and edit your information below. We look forward
            to seeing you at the event!
          </p>
        </Alert>
      )}

      <h1 className="mb-3 text-center">{headerText}</h1>
      <Form>
        <Form.Group controlId="formFirstName" className="formLabel">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
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
            required
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
            required
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
          {fname && lname && email && (
            <Button variant="danger" onClick={register}>
              {registerText}
            </Button>
          )}
          {(!fname || !lname || !email) && (
            <Button variant="danger" onClick={register} disabled>
              {registerText}
            </Button>
          )}
        </div>
      </Form>
    </Container>
  );
}
