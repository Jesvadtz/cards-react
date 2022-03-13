import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CustomForm() {
  function recordInfo(event) {
    const [Form, setForm] = React.useState({
      email: "",
      password: "",
    });
  }
  function saveInfo(event) {
    event.preventDefault;
    alert(JSON.stringify(Form));
  }
  return (
    <Form onSubmit={() => saveInfo()}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(event) => recordInfo(event)}
          name="email"
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
