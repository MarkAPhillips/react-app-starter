import { combineReducers } from 'redux';
import { error } from './errorReducer';
import { chart } from '../charts/chartReducer';

const rootReducer = combineReducers({
  chart, error,
});

export default rootReducer;
