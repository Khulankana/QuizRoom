import React, { useContext, useState } from "react";
import "../../pages/App/style.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { QuizContext } from "../../contexts/QuizContext";
import { useHistory, useRouteMatch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function QuizEdit() {
  const { quizs } = useContext(QuizContext);
  const { dispatch } = useContext(QuizContext);

  const [open, setOpen] = React.useState(false);

  const history = useHistory();
  const match = useRouteMatch();
  const quizId = match.params.id;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handle = () => {
    dispatch({ type: "DELETE_QUIZ", id: quizId });
    setOpen(false);
    let path = `/test_content`;
    history.push(path);
  };

  let quizData = null;
  quizs.forEach((quiz) => {
    if (quiz.id === quizId) {
      quizData = quiz;
    }
  });

  let initialQuestion = null;
  let initialAnswer_1 = null;
  let initialAnswer_2 = null;
  let initialAnswer_3 = null;
  let initialAnswer_4 = null;
  let initialRightAnswer = null;

  if (quizData) {
    initialQuestion = quizData.question;
    initialAnswer_1 = quizData.answer_1;
    initialAnswer_2 = quizData.answer_2;
    initialAnswer_3 = quizData.answer_3;
    initialAnswer_4 = quizData.answer_4;
    initialRightAnswer = quizData.rightAnswer;
  } else {
    console.log("No data!");
  }

  const [question, setQuestion] = useState(initialQuestion);
  const [answer_1, setAnswer_1] = useState(initialAnswer_1);
  const [answer_2, setAnswer_2] = useState(initialAnswer_2);
  const [answer_3, setAnswer_3] = useState(initialAnswer_3);
  const [answer_4, setAnswer_4] = useState(initialAnswer_4);
  const [rightAnswer, setRightAnswer] = useState(initialRightAnswer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_QUIZ",
      quiz: {
        id: quizId,
        question,
        answer_1,
        answer_2,
        answer_3,
        answer_4,
        rightAnswer,
      },
    });
    setQuestion("");
    setAnswer_1("");
    setAnswer_2("");
    setAnswer_3("");
    setAnswer_4("");

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
            marginRight: "2rem",
            backgroundColor: "#c72727",
            width: "5rem",
            color: "#fff",
            float: "right",
            padding: "1rem",
            fontSize: "1rem",
          }}
          onClick={handleClickOpen}
          value="Устгах"
        />
        <input
          className="btn"
          style={{
            marginRight: "2rem",
            backgroundColor: "#fff",
            border: "1px solid #c72727",
            color: "#c72727",
            float: "right",
            padding: "1rem",
            fontSize: "1rem",
          }}
          type="submit"
          value="Хадгалах"
        />
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Та устгахдаа итгэлтэй байна уу?
        </DialogTitle>
        <DialogActions>
          <Button color="primary" onClick={handle}>
            Тийм
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Үгүй
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
