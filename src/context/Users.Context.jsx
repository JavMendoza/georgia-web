import { createContext, useReducer, useContext } from "react";
import API from '../api/users.api';
import UsersReducer from '../reducers/Users.Reducer';
import { SetUsers, AddRepartidor } from '../actions/Users.Action';

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [usersState, dispatch] = useReducer(UsersReducer, { repartidores: [], comunes: [] });

  const getAllUsers = () => {
    API.getAllUsers()
    .then(data => {
      dispatch(SetUsers(data));
    })
  }

  const addRepartidor = async (user) => {
    return API.addRepartidor(user)
    .then(data => {
      dispatch(AddRepartidor(data.usuario));
    })
  }

  return <UsersContext.Provider value={{usersState, getAllUsers, addRepartidor}}>{children}</UsersContext.Provider>;
}

export function useUsers() {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsers must be used within a UsersProvider');
  }
  return context;
}