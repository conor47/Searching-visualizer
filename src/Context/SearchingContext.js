import React, { useContext, useReducer } from 'react';

import reducer from './Reducers/searchingReducer';
import { generateGrid } from '../Ulilities/gridFunctions';
import algorithms from '../Data/algorithms';

const searchingContext = React.createContext();

const initialState = {
  grid: generateGrid(),
  startNode: [7, 10],
  endNode: [7, 48],
  searchingAlgorithm: null,
  shortestPathAlgorithm: null,
  speed: 10,
  isRunning: false,
  isSuccessful: false,
  modal: true,
  modalPage: 1,
};

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSearchingAlgorithm = (text) => {
    const algo = algorithms.find(
      (algo) => algo.name === `${text.toLowerCase()}`
    );
    dispatch({ type: 'SET_SEARCH', payload: algo });
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

  const setSpeed = (speed) => {
    dispatch({ type: 'SET_SPEED', payload: { speed } });
  };

  const setSuccess = (success) => {
    dispatch({ type: 'SET_SUCCESS', payload: { success } });
  };

  const setRunning = (running) => {
    dispatch({ type: 'SET_RUNNING', payload: { running } });
  };

  const setModal = () => {
    dispatch({ type: 'SET_MODAL' });
  };

  const setModalPage = (page) => {
    dispatch({ type: 'SET_MODAL_PAGE', payload: { page } });
  };

  return (
    <searchingContext.Provider
      value={{
        ...state,
        setSearchingAlgorithm,
        setStartNode,
        setSpeed,
        setEndNode,
        setRunning,
        setSuccess,
        updateGrid,
        setModal,
        setModalPage,
      }}
    >
      {children}
    </searchingContext.Provider>
  );
};

export const useSearchingContext = () => {
  return useContext(searchingContext);
};
