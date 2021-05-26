import React from "react";

const TestTitle = ({ test }) => {
  console.log(test);
  return (
    <li>
      <div className="title">{test.title} </div>
    </li>
  );
};

export default TestTitle;
