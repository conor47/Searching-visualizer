import React, { useState, useContext } from 'react';
import { generateGrid } from '../Ulilities/gridFunctions';

const SearchingContext = React.createContext();

const initialState = {
  grid: generateGrid(),
  startNode: this.grid[7][10],
  endNode: this.grid[7][40],
};

const SearchProvider = ({ children }) => {};
