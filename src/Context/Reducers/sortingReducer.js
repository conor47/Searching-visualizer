import { generateArray } from '../../Ulilities/arrayFunctions';

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RUNNING':
      console.log(`running - ${action.payload.isRunning}`);
      return { ...state, running: action.payload.isRunning };
    case 'CREATE_ARRAY':
      let newArray = generateArray(action.payload.size);
      return { ...state, array: newArray };
    default:
      return { ...state };
  }
};

export default stateReducer;
