import { v4 as uuidv4 } from "uuid";

export const userLoginReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LOGIN_USER":
      return [
        ...state,
        {
          loginName: action.loginUser.loginName,
          loginPassword: action.loginUser.loginPassword,
          id: uuidv4(),
        },
      ];

    default:
      return state;
  }
};
