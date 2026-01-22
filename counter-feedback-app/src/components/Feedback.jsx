import React, { useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { PiSmileySadBold } from "react-icons/pi";
const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;
  // checking if total is greater than 0 helps prevent NaN COZ 0/ANY NUMBER=NaN
  const goodPer = total > 0 ? ((good / total) * 100).toFixed(1) : 0;
  const neutralPer = total > 0 ? ((neutral / total) * 100).toFixed(1) : 0;
  const badPer = total > 0 ? ((bad / total) * 100).toFixed(1) : 0.0;
  function handleGood() {
    setGood(good + 1);
  }
  function handleNeutral() {
    setNeutral(neutral + 1);
  }
  function handleBad() {
    setBad(bad + 1);
  }
  return (
    <>
      <div>
        <h1>HOW IS IT GOING?</h1>
        <button onClick={handleGood} className="">
          <FaRegSmile />
          <p>Good</p>
          <p>{good}</p>
        </button>
        <button onClick={handleNeutral} className="">
          <MdOutlineSentimentNeutral />
          <p>Neutral</p>
          <p>{neutral}</p>
        </button>
        <button onClick={handleBad} className="">
          <PiSmileySadBold />
          <p>Bad</p>
          <p>{bad}</p>
        </button>
      </div>
      <div>
        <p>TOTAL: {total}</p>
        <p>Good: {goodPer}</p>
        <p>Neutral: {neutralPer}</p>
        <p>Bad: {badPer}</p>
      </div>
    </>
  );
};

export default Feedback;
