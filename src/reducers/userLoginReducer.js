import { v4 as uuidv4 } from "uuid";

export const userloginReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LOGIN_USER":
      return [
        ...state,
        {
          name: action.loginUser.name,
          password: action.loginUser.password,
          id: uuidv4(),
        },
      ];
    default:
      return state;
  }
};
