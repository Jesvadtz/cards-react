import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CustomForm() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  function recordInfo(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  function saveInfo(event) {
    event.preventDefault();
    alert(JSON.stringify(form));
  }
  return (
    <Form onSubmit={(event) => saveInfo(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(event) => recordInfo(event)}
          name="email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) => recordInfo(event)}
          name="password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CustomForm;
