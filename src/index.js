import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

import UserContextProvider from "../src/contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
