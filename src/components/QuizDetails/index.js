import React, { useContext } from "react";
import { QuizContext } from "../../contexts/QuizContext";

const QuizDetails = ({ quiz }) => {
  const { dispatch } = useContext(QuizContext);
  return (
    <li onClick={() => dispatch({ type: "DELETE_QUIZ", id: quiz.id })}>
      <div className="question">{quiz.question}</div>
      <div className="answer_1">{quiz.answer_1}</div>
      <div className="answer_2">{quiz.answer_2}</div>
      <div className="answer_3">{quiz.answer_3}</div>
      <div className="answer_4">{quiz.answer_4}</div>
      <div className="rightAnswer">{quiz.rightAnswer}</div>
    </li>
  );
};

export default QuizDetails;
