import React, { createContext, useContext, useReducer } from 'react';
import { generateArray } from '../Ulilities/arrayFunctions/generateArray';
import reducer from './Reducers/sortingReducer';

const initialState = {
  array: generateArray(165),
  running: false,
};

const stateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setRunning = (isRunning) => {
    dispatch({ type: 'SET_RUNNING', payload: { isRunning } });
  };

  const newArray = (size) => {
    dispatch({ type: 'CREATE_ARRAY', payload: { size } });
  };

  return (
    <stateContext.Provider value={{ ...state, setRunning, newArray }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(stateContext);
};
