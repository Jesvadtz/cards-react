import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormCustom() {
  const [newProduct, setNewProduct] = React.useState({
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });

  function onChange(event) {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  }
  async function createNewProduct(event) {
    event.preventDefault();
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
    }).then((res) => res.json());
    setNewProduct(res);
    // console.log(newProduct);
  }

  return (
    <Form onSubmit={createNewProduct}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter price"
          name="price"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          name="description"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image"
          name="image"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter category"
          name="category"
          onChange={onChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormCustom;
