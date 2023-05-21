import React from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
function HeaderCartButton(props) {
  return (
    <button onClick={props.showOrder} className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
}

export default HeaderCartButton;
