import React, { createContext, useReducer, useEffect } from "react";
import { userLoginReducer } from "../reducers/userLoginReducer";
import axios from "../tt-axios";

export const UserLoginContext = createContext();

const login = (loginName, password) => {
  const url = "front";
  const data = [
    {
      loginName,
      password,
    },
  ];

  const options = {
    headers: { func: "1000" },
  };

  axios
    .post(url, data, options)
    .then((result) => {
      const user = result.data.user;
      console.log(">>>>> " + user.firstName);

      // setState({ ...state, saving: false, userId, token, error: null });
    })
    .catch((error) => {
      console.error(error);
      // setState({ ...state, saving: false, error: error.message });
    });
};

const UserLoginContextProvider = (props) => {
  const [loginUsers, dispatch] = useReducer(userLoginReducer, [], () => {
    const localData = localStorage.getItem("loginUsers");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("loginUsers", JSON.stringify(loginUsers));
  }, [loginUsers]);
  return (
    <UserContext.Provider value={{ loginUsers, dispatch, login }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
