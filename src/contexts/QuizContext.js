import React, { createContext, useReducer, useEffect } from "react";
import { quizReducer } from "../reducers/quizReducer";

export const QuizContext = createContext();

const QuizContextProvider = (props) => {
  const [quizs, dispatch] = useReducer(quizReducer, [], () => {
    const localData = localStorage.getItem("quizs");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("quizs", JSON.stringify(quizs));
  }, [quizs]);
  return (
    <QuizContext.Provider value={{ quizs, dispatch }}>
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
