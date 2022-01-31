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
    case 'SET_METRICS':
      const newMetrics = {
        speed: action.payload.speed,
        count: action.payload.count,
      };
      return { ...state, metrics: newMetrics };
    default:
      return { ...state };
  }
};

export default searchingReducer;
