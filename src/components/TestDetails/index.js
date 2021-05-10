import React from "react";

const TestDetails = ({ test }) => {
  return (
    <li>
      <div className="title">{test.title} </div>
      <div className="author">{test.quistion}</div>
      <div className="author">{test.answer_1}</div>
      <div className="author">{test.answer_2}</div>
    </li>
  );
};

export default TestDetails;
