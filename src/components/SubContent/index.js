import React from "react";
import "../../pages/App/style.css";
import { Link } from "react-router-dom";

export default function SubContent() {
  return (
    <div>
      <div>
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
  );
}
