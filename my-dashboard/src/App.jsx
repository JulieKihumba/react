import React, { useState } from "react";
import Header from "./components/Header";
import AddItemPopup from "./components/AddItemPopup";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";

const App = () => {
  const [addItemPopup, setAddItemPopup] = React.useState(false);
  const [newItem, setNewItem] = useState([]);
  function handleAddItem(item) {
    setNewItem((prevItems) => [...prevItems, item]);
  }
  function handleOpenPopup() {
    setAddItemPopup(true);
  }
  function handleClosePopup() {
    console.log("Close Popup");
    setAddItemPopup(false);
  }
  return (
    <div className="text-center">
      <Header handleOpenPopup={handleOpenPopup} />
      <div className="max-w-4xl mx-auto mt-6 px-4">
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {newItem.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-800 text-left">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-left">
                    {item.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-left">
                    {item.role}
                  </td>
                  <td className="px-6 py-4 text-sm text-left">
                    <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-left">
                    <button className="mr-6">
                      <RiEditLine className="size-5 text-gray-600" />
                    </button>
                    <button className="">
                      <RiDeleteBin6Line className="size-5 text-red-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {addItemPopup && (
        <AddItemPopup
          handleClosePopup={handleClosePopup}
          handleAddItem={handleAddItem}
        />
      )}
    </div>
  );
};

export default App;
