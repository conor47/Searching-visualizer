import React, { useState, useContext, useReducer } from 'react';

import reducer from './Reducers/searchingReducer';
import { generateGrid } from '../Ulilities/gridFunctions';
import algorithms from '../Data/algorithms';

const searchingContext = React.createContext();

const initialState = {
  grid: [],
  startNode: null,
  endNode: null,
  searchingAlgorithm: null,
  shortestPathAlgorithm: null,
};

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSearchingAlgorithm = (text) => {
    const algorithm = algorithms.find((algo) => algo.name === 'text');
    dispatch({ type: 'SET_SEARCH', payload: { algorithm } });
  };

  const setStartNode = (node) => {
    dispatch({ type: 'SET_START', payload: { startNode: node } });
  };

  const setEndNode = (node) => {
    dispatch({ type: 'SET_END', payload: { endNode: node } });
  };

  return (
    <searchingContext.Provider
      value={{ ...state, setSearchingAlgorithm, setStartNode, setEndNode }}
    >
      {children}
    </searchingContext.Provider>
  );
};

export const useSearchingContext = () => {
  return useContext(searchingContext);
};
