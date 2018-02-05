import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import error from './errorReducer';
import todos from './todosReducer';

const rootReducer = combineReducers({
  error,
  todos,
  ...createForms({
    todo: { item: '' },
  }),
});

export default rootReducer;
