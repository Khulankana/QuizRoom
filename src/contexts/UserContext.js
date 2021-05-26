import React, { createContext, useReducer, useEffect } from "react";
import { userReducer } from "../reducers/userReducer";
import axios from "../tt-axios";

export const UserContext = createContext();

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

const UserContextProvider = (props) => {
  const [users, dispatch] = useReducer(userReducer, [], () => {
    const localData = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <UserContext.Provider value={{ users, dispatch, login }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
