import React from "react";

function Categories(props) {
  return (
    <div
      style={{
        background: "purple",
        padding: ".4rem",
        borderRadius: "2rem",
        fontSize: ".6rem",
        textAlign: "center",
        marginLeft: ".5rem",
        color: "white",
        marginBottom: "1rem",
        width: "100px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Categories;
