import React, { createContext, useContext, useReducer } from 'react';
import { generateArray } from '../Ulilities/arrayFunctions';
import reducer from './Reducers/sortingReducer';

const initialState = {
  array: generateArray(165),
  running: false,
  success: false,
};

const sortingContext = createContext();

export const SortingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSuccess = (success) => {
    dispatch({ type: 'SET_SUCCESS', payload: { success } });
  };

  const setRunning = (isRunning) => {
    dispatch({ type: 'SET_RUNNING', payload: { isRunning } });
  };

  const newArray = (size) => {
    dispatch({ type: 'CREATE_ARRAY', payload: { size } });
  };

  return (
    <sortingContext.Provider
      value={{ ...state, setRunning, newArray, setSuccess }}
    >
      {children}
    </sortingContext.Provider>
  );
};

export const useSortingContext = () => {
  return useContext(sortingContext);
};
