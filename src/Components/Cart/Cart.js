import React from "react";
import "./Cart.css";
import { DUMMY_Cart } from "../../data/Dummy";
import Modal from "../UI/Modal";

function Cart(props) {
  const cartList = DUMMY_Cart.map((cart) => <li key={cart.id}>{cart.name}</li>);
  return (
    <Modal handleClose={props.hideCartHandler}>
      <ul className="cart-items">{cartList}</ul>
      <div className="total">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="actions">
        <button className="button">Order</button>
        <button onClick={props.hideCartHandler} className="button--alt">
          Close
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
