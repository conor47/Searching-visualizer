import React, { useState, useContext, useReducer } from 'react';

import reducer from './Reducers/searchingReducer';
import { generateGrid } from '../Ulilities/gridFunctions';
import algorithms from '../Data/algorithms';

const searchingContext = React.createContext();

const initialState = {
  grid: generateGrid(),
  startNode: [7, 10],
  endNode: [7, 40],
  searchingAlgorithm: null,
};

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSearchingAlgorithm = (text) => {
    const algorithm = algorithms.find(
      (algo) => algo.name === `${text.toLowerCase()}`
    );
    dispatch({ type: 'SET_SEARCH', payload: { algorithm } });
  };

  const setStartNode = (node) => {
    dispatch({ type: 'SET_START', payload: { startNode: node } });
  };

  const setEndNode = (node) => {
    dispatch({ type: 'SET_END', payload: { endNode: node } });
  };

  const updateGrid = (newGrid) => {
    dispatch({ type: 'UPDATE_GRID', payload: { newGrid } });
  };

  return (
    <searchingContext.Provider
      value={{
        ...state,
        setSearchingAlgorithm,
        setStartNode,
        setEndNode,
        updateGrid,
      }}
    >
      {children}
    </searchingContext.Provider>
  );
};

export const useSearchingContext = () => {
  return useContext(searchingContext);
};
