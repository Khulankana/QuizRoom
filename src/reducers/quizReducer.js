import { v4 as uuidv4 } from "uuid";

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "ADD_QUIZ":
      return [
        ...state,
        {
          question: action.quiz.question,
          answer_1: action.quiz.answer_1,
          answer_2: action.quiz.answer_2,
          answer_3: action.quiz.answer_3,
          answer_4: action.quiz.answer_4,
          rightAnswer: action.quiz.rightAnswer,
          id: uuidv4(),
        },
      ];
    case "EDIT_QUIZ":
      const results = state.slice();
      results.map((quiz, i) => {
        if (quiz.id === action.quiz.id) {
          results[i] = {
            ...results[i],
            question: action.quiz.question,
            answer_1: action.quiz.answer_1,
            answer_2: action.quiz.answer_2,
            answer_3: action.quiz.answer_3,
            answer_4: action.quiz.answer_4,
            rightAnswer: action.quiz.rightAnswer,
          };
        }
      });
      console.log(results);
      return results;
    case "DELETE_QUIZ":
      return state.filter((quiz) => quiz.id !== action.id);
    default:
      return state;
  }
};
