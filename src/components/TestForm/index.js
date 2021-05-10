import React, { useContext, useState } from "react";
import { TestContext } from "../../contexts/TestContext";
import { useHistory } from "react-router-dom";

const NewTestForm = () => {
  const { dispatch } = useContext(TestContext);
  const [title, setTitle] = useState("");
  const [quistion, setQuistion] = useState("");
  const [answer_1, setAnswer_1] = useState("");
  const [answer_2, setAnswer_2] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TEST",
      test: { title, quistion, answer_1, answer_2 },
    });
    setTitle("");
    setQuistion("");
    setAnswer_1("");
    setAnswer_2("");

    let path = `/test_content`;
    history.push(path);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="add test" />
    </form>
  );
};

export default NewTestForm;
