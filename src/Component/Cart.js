// CartModal.js
import React from "react";

const CartModal = ({ cartItems, onClose }) => {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <h2>Cart Items</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <strong>Name:</strong> {item.candy.candyName},{" "}
              <strong>Description:</strong> {item.candy.description},{" "}
              <strong>Price:</strong> {item.candy.price},{" "}
              <strong>Quantity:</strong> {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;
