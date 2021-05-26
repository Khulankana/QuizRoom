import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

import UserContextProvider from "../src/contexts/UserContext";
import TestContextProvider from "./contexts/TestContext";
import QuizContextProvider from "./contexts/QuizContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <TestContextProvider>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </TestContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
