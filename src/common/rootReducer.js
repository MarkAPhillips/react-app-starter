import { combineReducers } from 'redux';
import error from './errorReducer';
import todos from '../todos/todoReducer';

const rootReducer = combineReducers({
  error,
  todos,
});

export default rootReducer;
