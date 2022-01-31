const searchingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchingAlgorithm: action.payload.algorithm };
    case 'UPDATE_GRID':
      return { ...state, grid: action.payload.newGrid };
    case 'SET_START':
      return { ...state, startNode: action.payload.startNode };
    case 'SET_END':
      return { ...state, endNode: action.payload.endNode };
    case 'SET_SPEED':
      return { ...state, speed: action.payload.speed };
    default:
      return { ...state };
  }
};

export default searchingReducer;
