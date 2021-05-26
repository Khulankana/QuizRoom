import React from "react";

const TestDetails = ({ test }) => {
  return (
    <li>
      <div className="title">{test.title} </div>
      <div className="time">{test.time}</div>
      <div className="score">{test.score}</div>
    </li>
  );
};

export default TestDetails;
