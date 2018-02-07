import { combineReducers } from 'redux';
import error from './errorReducer';
import todos from './todosReducer';
import form from './formReducer';

const rootReducer = combineReducers({
  error,
  todos,
  form,
});

export default rootReducer;
