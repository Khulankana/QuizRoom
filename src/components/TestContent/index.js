import React, { useState } from "react";
import "../../pages/App/style.css";
import { Link } from "react-router-dom";
import { CustomDialog, useDialog } from "react-st-modal";
import CustomDialogContent from "../CustomDialog";

export default function TestContent() {
  return (
    <div className="quiz-create py-2">
      <div className="container-fluid">
        <div className=" card">
          <div className="grid-row">
            <div className="item">
              <div className="column">
                <div
                  className="quiz-content"
                  style={{
                    height: "420px",
                    border: "1px solid #CFCFE1",
                    margin: "0 1rem 2rem 0",
                  }}
                >
                  Тестүүдийн жагсаалт
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
                    onClick={async () => {
                      const result = await CustomDialog(
                        <CustomDialogContent />,
                        {
                          title: "  ",
                          showCloseIcon: true,
                        }
                      );
                    }}
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
            </div>
            <div className="item" style={{ marginTop: "2rem" }}>
              <br></br>
              <br></br>
              <textarea
                style={{
                  backgroundColor: "#E6E6FA",
                  border: "none",
                  borderRadius: "15px",
                  padding: "1rem",
                  width: "90%",
                  height: "5rem",
                }}
                type="text"
                placeholder="Тестийн асуулт...."
                name="email"
                required
              ></textarea>
              <br></br>
              <br></br>
              <div className="grid-row-same">
                <div className="item">
                  <input
                    style={{ margin: "0 0.5rem 0 2rem" }}
                    type="radio"
                    id="answer"
                    name="answer"
                    value="answer"
                  />
                  <label for="answer">
                    <input
                      type="text"
                      type="text"
                      placeholder="Хариулт...."
                      name="email"
                      required
                      style={{
                        border: "4px solid #009cff",
                        width: "80%",
                        height: "3rem",
                        borderRadius: "15px",
                        padding: "0.5rem",
                      }}
                    />
                  </label>
                  <br />
                  <br />
                  <input
                    style={{ margin: "0 0.5rem 0 2rem" }}
                    type="radio"
                    id="answer"
                    name="answer"
                    value="answer"
                  />
                  <label for="answer">
                    <input
                      type="text"
                      type="text"
                      placeholder="Хариулт...."
                      name="email"
                      required
                      style={{
                        border: "4px solid #f99500",
                        width: "80%",
                        height: "3rem",
                        borderRadius: "15px",
                        padding: "0.5rem",
                      }}
                    />
                  </label>
                </div>
                <div className="item">
                  <input
                    style={{ margin: "0 0.5rem 0 2rem" }}
                    type="radio"
                    id="answer"
                    name="answer"
                    value="answer"
                  />
                  <label for="answer">
                    <input
                      type="text"
                      type="text"
                      placeholder="Хариулт...."
                      name="email"
                      required
                      style={{
                        border: "4px solid #00ff22",
                        width: "80%",
                        height: "3rem",
                        borderRadius: "15px",
                        padding: "0.5rem",
                      }}
                    />
                  </label>
                  <br />
                  <br />
                  <input
                    style={{ margin: "0 0.5rem 0 2rem" }}
                    type="radio"
                    id="answer"
                    name="answer"
                    value="answer"
                  />
                  <label for="answer">
                    <input
                      type="text"
                      type="text"
                      placeholder="Хариулт...."
                      name="email"
                      style={{
                        border: "4px solid #a66bbe",
                        width: "80%",
                        height: "3rem",
                        borderRadius: "15px",
                        padding: "0.5rem",
                      }}
                    />
                  </label>
                </div>
              </div>

              <br></br>
              <br></br>

              <Link
                to="/create_test"
                style={{
                  backgroundColor: "#E6E6FA",
                  color: "#c72727",
                  borderRadius: "15px",
                  padding: "0.5rem",
                  marginRight: "4rem",
                  border: "3px solid #c72727",
                  float: "right",
                }}
              >
                Тест үүсгэх
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
