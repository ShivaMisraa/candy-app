// AddCandy.js
import React, { useState } from 'react';

const AddCandy = ({ onAddCandy }) => {
  const [candyName, setCandyName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddCandy = async () => {
    const newCandy = {
      candyName,
      description,
      price: parseFloat(price),
    };

    // Send a POST request to the API to add the new candy
    const response = await fetch('https://crudcrud.com/api/75374c94bfd942b88cfae235db2af9c0/CandyItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCandy),
    });

    if (response.ok) {
      // If the POST request is successful, add the candy to the list
      onAddCandy(newCandy);

      // Clear input fields
      setCandyName('');
      setDescription('');
      setPrice('');
    } else {
      console.error('Failed to add candy to the list.');
    }
  };

  return (
    <div>
      <form>
        <label>Candy Name : </label>
        <input
          type="text"
          value={candyName}
          onChange={(e) => setCandyName(e.target.value)}
        />
        <label>Description : </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price :</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="button" onClick={handleAddCandy}>
          Add to list
        </button>
      </form>
    </div>
  );
};

export default AddCandy;
