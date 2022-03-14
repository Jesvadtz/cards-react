import React from "react";

function Categories(props) {
  return (
    <div
      style={{
        background: "mediumpurple",
        padding: ".4rem .8rem",
        borderRadius: "2rem",
        fontSize: ".6rem",
        textAlign: "center",
        color: "white",
      }}
    >
      {props.children}
    </div>
  );
}

export default Categories;
