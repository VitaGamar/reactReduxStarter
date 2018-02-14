import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const counterApp = combineReducers({
  counterReducer: counterReducer
});

export default counterApp;
