const searchingReducer = (state, action) => {
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
    case 'SET_MODAL':
      return { ...state, modal: false };
    case 'SET_MODAL_PAGE':
      let page = action.payload.page;
      if (page === 7) {
        page = 1;
      } else if (page === 0) {
        page = 6;
      }
      return { ...state, modalPage: page };
    default:
      return { ...state };
  }
};

export default searchingReducer;
