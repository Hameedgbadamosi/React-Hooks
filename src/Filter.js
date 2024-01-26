import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const filterStyle = {
    marginBottom: '20px',
  };

  const inputStyle = {
    marginRight: '10px',
    padding: '5px',
  };

  const buttonStyle = {
    backgroundColor: 'teal',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
  };

  const handleFilter = () => {
    onFilter({ title, rating: parseFloat(rating) || 0 });
  };

  return (
    <div style={filterStyle}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleFilter} style={buttonStyle}>
        Filter
      </button>
    </div>
  );
};

export default Filter;