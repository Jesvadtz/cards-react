import React from "react";
import "./Card.css";
import Categories from "../Categories/Categories";

function Title(props) {
  return <h4>{props.children}</h4>;
}
function Description(props) {
  return <p>{props.children}</p>;
}
function Price(props) {
  return <h6>{props.children}</h6>;
}
function CardImage(props) {
  return <img src={props.src} className="card-image" />;
}

function Card(props) {
  return (
    <article className="card">
      <div className="container-image">
        <CardImage src={props.image} />
      </div>
      <div className="card-data">
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <Price>${props.price}</Price>
      </div>
      <div className="categories">
        <Categories>{props.category}</Categories>
      </div>
    </article>
  );
}

export default Card;
