// CandyList.js
import React, { useEffect, useState } from 'react';

const CandyList = ({ onAddToCart }) => {
  const [candies, setCandies] = useState([]);

  useEffect(() => {
    // Fetch candies from the API when the component is mounted
    const fetchCandies = async () => {
      const response = await fetch('https://crudcrud.com/api/75374c94bfd942b88cfae235db2af9c0/CandyItems');
      if (response.ok) {
        const data = await response.json();
        setCandies(data);
      } else {
        console.error('Failed to fetch candies from the API.');
      }
    };

    fetchCandies();
  }, []); // The empty array [] means this effect runs once when the component mounts

  return (
    <div>
      <h1>Candy List</h1>
      <ul>
        {candies.map((candy) => (
          <li key={candy._id}>
            <strong>Name:</strong> {candy.candyName}, <strong>Description:</strong> {candy.description}, <strong>Price:</strong> {candy.price}
            <button onClick={() => onAddToCart(candy)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandyList;
