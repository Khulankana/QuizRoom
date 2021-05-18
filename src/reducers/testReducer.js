import { v4 as uuidv4 } from "uuid";

export const testReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TEST":
      return [
        ...state,
        {
          title: action.test.title,
          time: action.test.time,
          score: action.test.score,
          id: uuidv4(),
        },
      ];
    case "DELETE_TEST":
      return state.filter((test) => test.id !== action.id);

    default:
      return state;
  }
};
