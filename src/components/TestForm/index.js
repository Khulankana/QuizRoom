import React, { useContext, useState } from "react";
import "../../pages/App/style.css";
import { TestContext } from "../../contexts/TestContext";
import { useHistory } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function TestMainInfo() {
  const { dispatch } = useContext(TestContext);
  const [title, setTitle] = useState("");
  const [score, setScore] = useState("time");
  const [time, setTime] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TEST",
      test: { title, score, time },
    });
    setTitle("");
    setTime("");

    let path = `/test_content`;
    history.push(path);
  };

  const handleChange = (event) => {
    setScore(event.target.value);
  };

  return (
    <div className="test-main-info py-2">
      <div className="container-fluid">
        <h2>Тест үүсгэх</h2>
        <div className="bottom-line"></div>
        <div className="card" style={{ height: "500px" }}>
          <div className="item" style={{ margin: "0 5rem 0 5rem" }}>
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>
              <label>Тестийн ерөнхий гарчиг:</label>
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
                placeholder="Тестийн ерөнхий гарчиг ...."
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
              <br></br>
              <br></br>
              <div className="grid-row-same">
                <div>
                  <label>Хариулах хугацаа:</label>
                  <div className="item" style={{ marginTop: "1.5rem" }}></div>
                  <input
                    type="number"
                    placeholder="Секундээр тооцож оруулна уу...."
                    value={time}
                    required
                    onChange={(e) => setTime(e.target.value)}
                    style={{
                      border: "3px solid #009cff",
                      width: "70%",
                      height: "3rem",
                      borderRadius: "15px",
                      padding: "0.5rem",
                      marginLeft: "3rem",
                    }}
                  />
                </div>
                <div>
                  <label>Тестийн үнэлгээ:</label>
                  <br />
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={score}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="time"
                        control={<Radio />}
                        label="Хугацаанаас хамаарсан"
                      />
                      <FormControlLabel
                        value="constant"
                        control={<Radio />}
                        label="Тогтмол утгаар"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <br></br> <br></br>
              <input
                className="btn"
                style={{
                  marginRight: "5rem",
                  backgroundColor: "#c72727",
                  float: "right",
                  padding: "1rem",
                  fontSize: "1rem",
                }}
                type="submit"
                value=" Үргэлжлүүлэх"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
