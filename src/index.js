import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

import UserContextProvider from "../src/contexts/UserContext";
import TestContextProvider from "./contexts/TestContext";
import QuizContextProvider from "./contexts/QuizContext";
import UserLoginContextProvider from "./contexts/UserLoginContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <UserLoginContextProvider>
        <TestContextProvider>
          <QuizContextProvider>
            <App />
          </QuizContextProvider>
        </TestContextProvider>
      </UserLoginContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
