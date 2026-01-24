import React, { useState } from "react";

const AddPopup = ({ handleClosePopup, handleAddNewPerson }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  //handles submit and adding of a prson
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { name, number };
    handleAddNewPerson(newPerson);
    handleClosePopup();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add</button>
          <button type="button" onClick={handleClosePopup}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPopup;
