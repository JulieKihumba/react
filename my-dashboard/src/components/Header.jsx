import React from "react";

const Header = ({handleAddItem}) => {
    
  return (
    <div className="flex justify-between items-center p-5 border-b">
      <h1 className="">Dashboard</h1>
      <button onClick={handleAddItem}>+ Add Item</button>
    </div>
  );
};

export default Header;
