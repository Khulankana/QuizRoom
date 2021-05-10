import React, { createContext, useReducer, useEffect } from "react";
import { testReducer } from "../reducers/testReducer";

export const TestContext = createContext();

const TestContextProvider = (props) => {
  const [tests, dispatch] = useReducer(testReducer, [], () => {
    const localData = localStorage.getItem("tests");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("tests", JSON.stringify(tests));
  }, [tests]);
  return (
    <TestContext.Provider value={{ tests, dispatch }}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
