import React, { createContext, useState } from "react";
import axios from "../tt-axios";
import { v4 as uuidv4 } from "uuid";

export const UserLoginContext = createContext();

const UserLoginContextProvider = (props) => {
  const [state, setState] = useState([
    {
      waiting: false,
      error: "",
      user: null,
    },
  ]);

  //   const addLoginUser = (loginName, password) => {
  //     setLoginUsers([...loginUsers, { loginName, password, id: uuidv4 }]);
  //   };

  const login = (loginName, password) => {
    setState({ ...state, waiting: true });
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

        setState({ ...state, waiting: false, user, error: "" });

        // setState({ ...state, saving: false, userId, token, error: null });
      })
      .catch((error) => {
        console.error(error);

        setState({ ...state, waiting: false, error: error.response.data });
        // setState({ ...state, saving: false, error: error.message });
      });
  };

  return (
    <UserLoginContext.Provider value={{ state, login }}>
      {props.children}
    </UserLoginContext.Provider>
  );
};

export default UserLoginContextProvider;
