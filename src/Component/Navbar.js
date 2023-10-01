import React, { useState } from 'react';
import "./Navbar.css";
import CartModal from "./Cart";

const Navbar = ({ cartItems }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  // Calculate the total quantity of items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <div className="navbar">
      <div className="left">
        <span className="app-title">Candy App</span>
      </div>
      <div className="right">
        <button className="cart-button" onClick={openCart}>Cart ({cartItemCount})</button>
      </div>
      {isCartOpen && <CartModal cartItems={cartItems} onClose={closeCart} />}
    </div>
  )
}

export default Navbar;
