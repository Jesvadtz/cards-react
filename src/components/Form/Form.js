import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

let emailUser = "";
let passwordUser = "";

function CustomForm() {
  function infoInput(event) {
    emailUser = event.target.value;
    console.log(emailUser);
  }

  function infoPassword(event) {
    passwordUser = event.target.value;
    console.log(passwordUser);
  }
  function saveInfo() {
    alert(`${emailUser} ${passwordUser}`);
  }
  return (
    <Form onSubmit={() => saveInfo()}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(event) => infoInput(event)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) => infoPassword(event)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CustomForm;
