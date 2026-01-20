import React from "react";

const AddItemPopup = ({ handleClosePopup }) => {
  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit()}>
        <div className="">
          <label htmlFor="name">Name:</label>
          <input type="text" />
        </div>
        <div className="email">
          <label htmlFor="">Email:</label>
          <input type="text" />
        </div>
        <div className="role">
          <label htmlFor="">Role:</label>
          <input type="text" />
        </div>
        <div className="status">
          <label htmlFor="">Status:</label>
          <select name="" id="">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="">
          <button onClick={handleClosePopup}>Cancel</button>
          <button>Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default AddItemPopup;
