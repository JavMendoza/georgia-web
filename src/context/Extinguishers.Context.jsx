import { createContext, useReducer, useContext } from "react";
import API from '../api/extinguishers.api';
import ExtinguishersReducer from '../reducers/Extinguishers.Reducer';
import { SetExtinguishers } from '../actions/Extinguishers.Action';

const ExtinguishersContext = createContext();

export function ExtinguishersProvider({ children }) {
  const [extinguishersState, dispatch] = useReducer(ExtinguishersReducer, { extinguishers: [] });

  const getAllExtinguishers = () => {
    API.getAllExtinguishers()
    .then(data => {
      dispatch(SetExtinguishers(data));
    })
  }

  const findExtinguisherById = (idToFind) => {
    return extinguishersState.extinguishers.find(extinguisher => extinguisher._id === idToFind);
  }

  return <ExtinguishersContext.Provider value={{extinguishersState, getAllExtinguishers, findExtinguisherById}}>{children}</ExtinguishersContext.Provider>;
}

export function useExtinguishers() {
  const context = useContext(ExtinguishersContext);
  if (!context) {
    throw new Error('useExtinguishers must be used within a ExtinguishersProvider');
  }
  return context;
}