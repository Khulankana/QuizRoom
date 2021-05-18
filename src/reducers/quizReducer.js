import { v4 as uuidv4 } from "uuid";

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "ADD_QUIZ":
      return [
        ...state,
        {
          quistion: action.quiz.quistion,
          answer_1: action.quiz.answer_1,
          answer_2: action.quiz.answer_2,
          answer_3: action.quiz.answer_3,
          answer_4: action.quiz.answer_4,
          id: uuidv4(),
        },
      ];
    case "DELETE_ QUIZ":
      return state.filter((quiz) => quiz.id !== action.id);

    default:
      return state;
  }
};
