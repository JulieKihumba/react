import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AddItemPopup from "./components/AddItemPopup";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import userService from "./services/users";

const App = () => {
  const [addItemPopup, setAddItemPopup] = React.useState(false);
  const [users, setUsers] = useState([]);

  function handleOpenPopup() {
    setAddItemPopup(true);
  }
  function handleClosePopup() {
    console.log("Close Popup");
    setAddItemPopup(false);
  }

  // CREATE/ADD A USER
  const handleAddUser = (user) => {
    userService.create(user)
    .then(response=>{setUsers((prevUser) => [...prevUser, response.data])})
    // ;
  };
  // GET ALL USERS
  useEffect(() => {
    userService.getAll().then((response) => {
      setUsers(response.data);
    });
  }, []);
 
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
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-800 text-left">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-left">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-left">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 text-sm text-left">
                    <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                      {user.status}
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
          handleAddUser={handleAddUser}
        />
      )}
    </div>
  );
};

export default App;
