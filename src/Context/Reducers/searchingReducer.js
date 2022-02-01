const searchingReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'SET_SEARCH':
      return {
        ...state,
        searchingAlgorithm: action.payload,
      };
    case 'UPDATE_GRID':
      return { ...state, grid: action.payload.newGrid };
    case 'SET_START':
      return { ...state, startNode: action.payload.startNode };
    case 'SET_END':
      return { ...state, endNode: action.payload.endNode };
    case 'SET_SPEED':
      return { ...state, speed: action.payload.speed };
    case 'SET_RUNNING':
      return { ...state, isRunning: action.payload.running };
    case 'SET_SUCCESS':
      return { ...state, isSuccessful: action.payload.success };
    default:
      return { ...state };
  }
};

export default searchingReducer;
