import React from "react";
import "./Card.css";
import CustomCategories from "./Categories";

function Title(props) {
  return <h4>{props.children}</h4>;
}

function Price(props) {
  return <h6>{props.children}</h6>;
}
function CardImage(props) {
  return <img src={props.src} className="card-tshirt" />;
}

function Card(props) {
  return (
    <article className="card">
      <CardImage src={props.src} />
      <Title>{props.title}</Title>
      <Price>{props.price}</Price>
      <CustomCategories>{props.category}</CustomCategories>
    </article>
  );
}

export default Card;
