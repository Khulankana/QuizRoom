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
    case "EDIT_TEST":
      const results = state.slice();
      results.map((test, i) => {
        if (test.id === action.test.id) {
          results[i] = {
            ...results[i],
            title: action.test.title,
            time: action.test.time,
            score: action.test.score,
          };
        }
      });
      console.log(results);
      return results;
    case "DELETE_TEST":
      return state.filter((test) => test.id !== action.id);
    default:
      return state;
  }
};
