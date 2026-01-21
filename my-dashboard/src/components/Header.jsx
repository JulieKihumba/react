import React from "react";

const Header = ({handleOpenPopup}) => {

  return (
    <div className="flex justify-between items-center p-6 bg-white shadow-sm border-b border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <button
        onClick={handleOpenPopup}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
      >
        + Add Item
      </button>
    </div>
  );
};

export default Header;
