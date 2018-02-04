import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import error from './errorReducer';
import todos from './todosReducer';
import { todoFormPlugin } from './todoFormPlugin';

const rootReducer = combineReducers({
  form: formReducer.plugin(todoFormPlugin),
  error,
  todos,
});

export default rootReducer;
