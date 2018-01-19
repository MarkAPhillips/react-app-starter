import { combineReducers } from 'redux';
import { error } from './errorReducer';

const rootReducer = combineReducers({
  error,
});

export default rootReducer;
