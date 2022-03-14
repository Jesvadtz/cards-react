import React from "react";
import "./Navbar.scss";
import userImage from "../../assets/user.jpg";

function Navbar() {
  return (
    <nav>
      <div className="logo">Kodemia</div>
      <div className="pages">
        <a>Home</a>
        <a>Products</a>
        <a>Favorites</a>
        <img src={userImage} />
      </div>
    </nav>
  );
}

export default Navbar;
