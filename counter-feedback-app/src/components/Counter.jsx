import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleMinus() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <div>
      <h1>{count}</h1>
      <div className="">
        <button onClick={handleAdd}>INCREASE</button>
        <button onClick={handleMinus}>DECREASE</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
};

export default Counter;
