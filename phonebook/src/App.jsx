import React, { useState } from "react";
import Header from "./components/Header";
import AddPopup from "./components/AddPopup";

Header;
const App = () => {
  // variable for the add popup
  const [popup, setPopup] = useState(false);
  //variable for the person who will be added
  const [persons, setPersons] = useState([]);
  //variable for the persons..like those who are there
  // const [persons, setPersons]=useState([])

  //function that handles popup appearing
  const handleAddPopup = () => {
    setPopup(true);
  };
  //function that handles popup disappearing
  const handleClosePopup = () => {
    setPopup(false);
  };

  //function handles creating a new person
  const handleAddNewPerson = (newPerson) => {
    setPersons((prevPersons) => [...prevPersons, newPerson]);
  };
  return (
    <div>
      <Header handleAddPopup={handleAddPopup} />
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
      {popup && (
        <AddPopup
          handleClosePopup={handleClosePopup}
          handleAddNewPerson={handleAddNewPerson}
        />
      )}
    </div>
  );
};

export default App;
