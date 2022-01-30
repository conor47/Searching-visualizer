const searchingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchingAlgorithm: action.payload.algorithm };

    case 'SET_START':
      return { ...state, startNode: action.payload.startNode };
    case 'SET_END':
      return { ...state, endNode: action.payload.endNode };
    default:
      return { ...state };
  }
};

export default searchingReducer;