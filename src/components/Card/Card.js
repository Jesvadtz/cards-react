import React from "react";
import "./Card.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tshirt from "../../assets/tshirt-kids.jpg";

function CustomCard({ count, setCount }) {
  function addCart() {
    setCount(count + 1);
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Tshirt} />
      <Card.Body>
        <Card.Title>T-shirt Kids</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="cart">
          <Button onClick={addCart}>Add Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
