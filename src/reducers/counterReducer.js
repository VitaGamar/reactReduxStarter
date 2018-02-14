import * as actionType from '../actions/ActionTypes';
import initialState from '../stores/initialState'

const counterReducer = (state = initialState.counterReducer, action) => {
  switch (action.type) {
    case actionType.ADD_COUNTER:
      return state + action.payload;
    case actionType.REMOVE_COUNTER:
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
