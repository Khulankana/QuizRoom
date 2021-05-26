import React from "react";
import "../../pages/App/style.css";

import { Link } from "react-router-dom";
import QuizList from "../QuizList";

export default function MainContent() {
  return (
    <div className="column">
      <div
        className="quiz-content"
        style={{
          height: "420px",
          width: "16.5rem",
          border: "1px solid #CFCFE1",
          margin: "0 1rem 2rem 0",
          overflowY: "scroll",
        }}
      >
        <QuizList />
      </div>
      <div className="quiz-add-finish">
        <Link
          className="btn"
          style={{
            backgroundColor: "#c72727",
            color: "#fff",
            width: "9rem",
            textAlign: "center",
            marginLeft: "4rem",
          }}
          to="/test_content_test"
        >
          Тест нэмэх
        </Link>
        <br />
        <Link
          to="/test_lists"
          className="btn"
          style={{
            backgroundColor: "#fff",
            color: "#c72727",
            border: "#c72727 1px solid",
            width: "9rem",
            textAlign: "center",
            marginLeft: "4rem",
            marginTop: "1rem",
          }}
        >
          Дуусгах
        </Link>
      </div>
    </div>
  );
}
