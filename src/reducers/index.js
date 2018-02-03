import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import error from './errorReducer';
import todos from './todosReducer';

const rootReducer = combineReducers({
  form: formReducer,
  error,
  todos,
});

export default rootReducer;
