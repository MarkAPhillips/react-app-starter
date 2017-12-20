import { combineReducers } from 'redux';
import { chartReducer } from '../src/charts/';

const rootReducer = combineReducers({
  chartReducer,
});

export default rootReducer;
