import { combineReducers } from 'redux';
import error from './errorReducer';
import todos from './todosReducer';

const rootReducer = combineReducers({
  error,
  todos,
});

export default rootReducer;
