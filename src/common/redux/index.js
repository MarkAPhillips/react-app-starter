import { combineReducers } from 'redux';
import { error } from './error';
import { chart } from '../../charts/redux';

const rootReducer = combineReducers({
  chart, error,
});

export default rootReducer;
