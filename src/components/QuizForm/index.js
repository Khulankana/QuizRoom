import React, { useContext, useState } from "react";
import "../../pages/App/style.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { QuizContext } from "../../contexts/QuizContext";
import { useHistory, useRouteMatch } from "react-router-dom";

const NewQuizForm = () => {
  const { dispatch } = useContext(QuizContext);
  const [question, setQuestion] = useState("");
  const [answer_1, setAnswer_1] = useState("");
  const [answer_2, setAnswer_2] = useState("");
  const [answer_3, setAnswer_3] = useState("");
  const [answer_4, setAnswer_4] = useState("");
  const [rightAnswer, setRightAnswer] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_QUIZ",
      quiz: { question, answer_1, answer_2, answer_3, answer_4, rightAnswer },
    });
    setQuestion("");
    setAnswer_1("");
    setAnswer_2("");
    setAnswer_3("");
    setAnswer_4("");
    setRightAnswer("");

    let path = `/test_content`;
    history.push(path);
  };

  const handleChange = (event) => {
    setRightAnswer(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          style={{
            backgroundColor: "#E6E6FA",
            border: "none",
            borderRadius: "15px",
            padding: "1rem",
            width: "90%",
            height: "6rem",
          }}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
          placeholder="Тестийн асуулт...."
        ></textarea>
        <br></br>
        <br></br>

        <FormControl
          component="fieldset"
          style={{ margin: " 0 2rem 0.5rem 2rem" }}
        >
          <RadioGroup value={rightAnswer} onChange={handleChange}>
            <div className="grid-row-same">
              <div className="item" style={{ marginLeft: "1rem" }}>
                <FormControlLabel value="answer1" control={<Radio />} />
                <label for="answer">
                  <input
                    type="text"
                    placeholder="Хариулт...."
                    value={answer_1}
                    required
                    onChange={(e) => setAnswer_1(e.target.value)}
                    style={{
                      border: "4px solid #009cff",
                      width: "80%",
                      height: "3rem",
                      borderRadius: "15px",
                      padding: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  />
                </label>
                <FormControlLabel value="answer2" control={<Radio />} />
                <label for="answer">
                  <input
                    type="text"
                    value={answer_2}
                    onChange={(e) => setAnswer_2(e.target.value)}
                    placeholder="Хариулт...."
                    name="email"
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
              <div className="item" style={{ marginLeft: "1rem" }}>
                <FormControlLabel value="answer3" control={<Radio />} />
                <label for="answer">
                  <input
                    type="text"
                    value={answer_3}
                    required
                    onChange={(e) => setAnswer_3(e.target.value)}
                    placeholder="Хариулт...."
                    name="email"
                    style={{
                      border: "4px solid #00ff22",
                      width: "80%",
                      height: "3rem",
                      borderRadius: "15px",
                      padding: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  />
                </label>
                <FormControlLabel value="answer4" control={<Radio />} />
                <label for="answer">
                  <input
                    type="text"
                    value={answer_4}
                    onChange={(e) => setAnswer_4(e.target.value)}
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
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <br></br>
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
          value=" Тест үүсгэх"
        />
      </form>
    </div>
  );
};

export default NewQuizForm;
