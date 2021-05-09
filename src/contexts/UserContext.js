import React, { createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const UserContext = createContext();

const UserContextProvider = (props) => {
      const[ users, setUsers] = useState([
            {name: 'Khulan', email: 'khulan.flwr524@gmail.com', password: 'pass', id: 1}
      ])
      const addUser = (name, email, password) => {
            setUsers([...users, {name, email, password, id: uuidv4 }])
      }
      const deleteUser = (id) => {
            setUsers(users.filter(user => user.id !== id))
      }

      return (
            <UserContext.Provider value={{users, addUser, deleteUser}}>
                  {props.children}
            </UserContext.Provider>
      )
}

export default UserContextProvider;