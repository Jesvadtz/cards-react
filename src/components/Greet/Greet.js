import React from "react";

function Greet() {
  const name = "Andrea";
  function Name(props) {
    return <h6>Hi, {props.children}</h6>;
  }
  return (
    <div>
      <Name>{name}</Name>
      <h3>What are you looking for today?</h3>
    </div>
  );
}

export default Greet;
