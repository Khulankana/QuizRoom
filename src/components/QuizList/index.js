import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuizTitle from "../QuizTitle";
import { QuizContext } from "../../contexts/QuizContext";
import { FiEdit2 } from "react-icons/fi";

const QuizList = () => {
  const { quizs } = useContext(QuizContext);
  return quizs.length ? (
    <div>
      <ul>
        <li>
          {quizs.map((quiz) => {
            return (
              <div
                className="grid-5-1 "
                style={{
                  margin: "0.7rem",
                  padding: "0.3rem",
                  border: "1px solid #c72727",
                  borderRadius: "15px",
                  width: "13.8rem",
                }}
              >
                <div
                  className="item"
                  style={{
                    paddingLeft: "0.2rem",
                    fontSize: "0.8rem",
                  }}
                >
                  <QuizTitle quiz={quiz} key={quiz.id} />
                </div>
                <div className="item">
                  <Link to={`/quiz_edit/${quiz.id}`}>
                    <FiEdit2
                      style={{
                        color: "#009cff",
                        fontSize: "1.5rem",
                        paddingTop: "0.1rem",
                      }}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  ) : (
    <div className="empty" style={{ fontSize: "14px", margin: "0.8rem" }}>
      Та одоогоор тест үүсгээгүй байна..
    </div>
  );
};

export default QuizList;
