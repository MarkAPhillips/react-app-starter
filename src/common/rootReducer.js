import { combineReducers } from 'redux';
import { error } from './errorReducer';
import { catalogue } from '../catalogue/catalogueReducer';

const rootReducer = combineReducers({
  catalogue, error,
});

export default rootReducer;
