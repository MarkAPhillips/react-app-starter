import { combineReducers } from 'redux';
import error from './errorReducer';
import todos from './todoReducer';

const rootReducer = combineReducers({
  error,
  todos,
});

export default rootReducer;
