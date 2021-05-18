import React from "react";

const QuizDetails = ({ quiz }) => {
  return (
    <li>
      <div className="title">{quiz.quistion} </div>
      <div className="author">{quiz.answer_1}</div>
      <div className="author">{quiz.answer_2}</div>
      <div className="author">{quiz.answer_3}</div>
      <div className="author">{quiz.answer_4}</div>
    </li>
  );
};

export default QuizDetails;
