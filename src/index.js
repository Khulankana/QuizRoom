import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

import UserContextProvider from "../src/contexts/UserContext";
import TestContextProvider from "./contexts/TestContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <TestContextProvider>
        <App />
      </TestContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
