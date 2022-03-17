import React from "react";

function Name(props) {
  return <h6>Hi, {props.children}</h6>;
}

function Greet() {
  const name = "Andrea";
  return (
    <div>
      <Name>{name}</Name>
      <h3>What are you looking for today?</h3>
    </div>
  );
}

export default Greet;
