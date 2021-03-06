import { generateArray } from '../../Ulilities/arrayFunctions';

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RUNNING':
      return { ...state, running: action.payload.isRunning };
    case 'CREATE_ARRAY':
      let newArray = generateArray(action.payload.size);
      return { ...state, array: newArray };
    case 'SET_SUCCESS':
      return { ...state, success: action.payload.success };
    default:
      return { ...state };
  }
};

export default stateReducer;
