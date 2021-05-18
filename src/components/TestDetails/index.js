import React from "react";

const TestDetails = ({ test }) => {
  return (
    <li>
      <div className="title">{test.title} </div>
      <div className="author">{test.time}</div>
      <div className="author">{test.score}</div>
    </li>
  );
};

export default TestDetails;
