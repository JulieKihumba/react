import React from "react";
import Counter from "./components/Counter";
import Feedback from "./components/Feedback";
import "./App.css"
Counter;
const App = () => {
  return (
    <div>
      <Counter />
      <Feedback />
    </div>
  );
};

export default App;
