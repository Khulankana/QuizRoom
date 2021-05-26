import React, { useContext, useState } from "react";
import "../../pages/App/style.css";
import { TestContext } from "../../contexts/TestContext";
import { useHistory, useRouteMatch } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function TestEdit() {
  const { tests } = useContext(TestContext);
  const { dispatch } = useContext(TestContext);

  const history = useHistory();
  const match = useRouteMatch();
  const testId = match.params.id;

  let testData = null;
  tests.forEach((test) => {
    if (test.id === testId) {
      testData = test;
    }
  });

  let initialTitle = null;
  let initialScore = null;
  let initialTime = null;

  if (testData) {
    initialTitle = testData.title;
    initialScore = testData.score;
    initialTime = testData.time;
  } else {
    alert("No data!");
  }
  const [title, setTitle] = useState(initialTitle);
  const [score, setScore] = useState(initialScore);
  const [time, setTime] = useState(initialTime);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_TEST",
      test: {
        id: testId,
        title,
        score,
        time,
      },
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
        <h2>Тестэндээ засвар хийх</h2>
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
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
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
