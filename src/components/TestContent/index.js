import React from "react";
import "../../pages/App/style.css";

import MainContent from "../MainContent";

export default function TestContentWithTest() {
  return (
    <div className="quiz-create py-2">
      <div className="container-fluid">
        <div className=" card">
          <div className="grid-row">
            <div className="item">
              <MainContent />
            </div>
            <div className="item" style={{ marginTop: "2rem" }}>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
