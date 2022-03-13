import React from "react";
import cartIcon from "../assets/cart.png";
import Badge from "react-bootstrap/Badge";

function Header({ count }) {
  return (
    <header className="header-cart">
      <img src={cartIcon} className="icon-cart" />
      <Badge pill bg="danger" className="cart-count">
        {count}
      </Badge>
    </header>
  );
}
export default Header;
