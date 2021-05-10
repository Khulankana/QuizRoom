import { v4 as uuidv4 } from "uuid";

export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          name: action.user.name,
          email: action.user.email,
          password: action.user.password,
          id: uuidv4(),
        },
      ];
    case "DELETE_USER":
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};
