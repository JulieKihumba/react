import React from "react";
import Header from "./components/Header";
import AddItemPopup from "./components/AddItemPopup";

const App = () => {
  const [addItemPopup, setAddItemPopup] = React.useState(false);
  function handleAddItem() {
        console.log("Add Item button clicked");
        setAddItemPopup(true);
    }
  function handleClosePopup() {
    console.log("Close Popup");
    setAddItemPopup(false);
  }  
  return (
    <div className="text-center">
      <Header handleAddItem={handleAddItem} />
      {addItemPopup && <AddItemPopup handleClosePopup={handleClosePopup}/>}
    </div>
  );
};

export default App;
