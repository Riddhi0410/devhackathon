import React, { useState } from 'react';

const FoodInput = () => {
  const [foodItems, setFoodItems] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/food`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date, items }),
    })
    if (res.ok) {
      setMessage('Food data submitted successfully');
    } else {
      setMessage('Failed to submit food data');
    }
  };

  return (
    <div className="page">
      <h2>Daily Food Input</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="foodItems">What did you eat today?</label>
        <textarea id="foodItems" rows="6" value={foodItems} onChange={e => setFoodItems(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FoodInput;
