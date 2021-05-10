import { v4 as uuidv4 } from "uuid";

export const testReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TEST":
      return [
        ...state,
        {
          title: action.test.title,
          quistion: action.test.quistion,
          answer_1: action.test.answer_1,
          answer_2: action.test.answer_2,
          id: uuidv4(),
        },
      ];
    case "DELETE_TEST":
      return state.filter((test) => test.id !== action.id);

    default:
      return state;
  }
};
