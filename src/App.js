import React, { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import AddCandy from "./Component/AddCandy";
import CandyList from "./Component/CandyList";
import CartModal from "./Component/Cart";
import "./App.css";

const App = () => {
  const [candies, setCandies] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    // Fetch candies from the API when the component is mounted and whenever candies change
    const fetchCandies = async () => {
      const response = await fetch(
        'https://crudcrud.com/api/75374c94bfd942b88cfae235db2af9c0/CandyItems'
      );
      if (response.ok) {
        const data = await response.json();
        setCandies(data);
      } else {
        console.error('Failed to fetch candies from the API.');
      }
    };

    fetchCandies();
  }, [candies]); // Update the candies whenever the candies state changes

  const handleAddCandy = (newCandy) => {
    // Update the candies state with the new candy
    setCandies([...candies, newCandy]);
  };

  const addToCart = (candy) => {
    // Check if the candy is already in the cart
    const existingItem = cartItems.find((item) => item.candy.id === candy.id);

    if (existingItem) {
      // If the candy is already in the cart, increase its quantity
      const updatedCart = cartItems.map((item) => {
        if (item.candy.id === candy.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCart);
    } else {
      // If the candy is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { candy, quantity: 1 }]);
    }
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <div>
      <Navbar cartItems={cartItems} onOpenCart={openCart} />
      <AddCandy onAddCandy={handleAddCandy} />
      <CandyList candies={candies} onAddToCart={addToCart} />
      {isCartOpen && <CartModal cartItems={cartItems} onClose={closeCart} />}
    </div>
  );
};

export default App;
