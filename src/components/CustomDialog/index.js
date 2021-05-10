import React, { useState } from "react";
import Choice from "../../assets/quiz/test-multiple-choice-questions.png";
import YesNo from "../../assets/quiz/yes-or-no.jpg";
import { CustomDialog, useDialog } from "react-st-modal";

export default function CustomDialogContent() {
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <div className="form-popup" style={{ textAlign: "center" }}>
      <form className="form-container">
        <h2
          style={{
            textTransform: "uppercase",
            fontWeight: "400",
            fontSize: "1.2rem",
          }}
        >
          Тестийн төрлийг сонгоно уу
        </h2>
        <div className="bottom-line"></div>

        <div className="grid-row-same">
          <div>
            <button
              onClick={() => {
                dialog.close(value);
              }}
            >
              <img src={Choice} alt="Choice" />
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                dialog.close(value);
              }}
            >
              <img src={YesNo} alt="YesNo" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
