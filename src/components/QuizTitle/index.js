import React, { useContext } from "react";
import { QuizContext } from "../../contexts/QuizContext";

const QuizTitle = ({ quiz }) => {
  const { dispatch } = useContext(QuizContext);
  return (
    <li onClick={() => dispatch({ type: "DELETE_QUIZ", id: quiz.id })}>
      <div className="question">{quiz.question}</div>
    </li>
  );
};

export default QuizTitle;
