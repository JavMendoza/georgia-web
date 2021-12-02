import { createContext, useReducer, useContext } from "react";
import API from '../api/users.api';
import AuthReducer from '../reducers/Auth.Reducer';
import { LogIn, LogOut } from '../actions/Auth.Action';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(AuthReducer, { user: null });

  function logIn(email, password) {
    API.logIn(email, password)
    .then(data => {
      localStorage.setItem("user", JSON.stringify(data.usuario));
      localStorage.setItem("token", JSON.stringify(data.token));
      dispatch(LogIn(data));
    })
    .catch(function (err) {
      console.error(err);
    });
  }

  function logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(LogOut());
  }

  function setUser(data) {
    dispatch(LogIn({ usuario: data }));
  }

  return <AuthContext.Provider value={{authState, dispatch, logIn, logOut, setUser}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}