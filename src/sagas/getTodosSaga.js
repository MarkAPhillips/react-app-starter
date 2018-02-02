import { take } from 'redux-saga/effects';
import { LOAD_REQUEST } from '../reducers/todoReducer';

export function* getTodosSaga() {
  yield take(LOAD_REQUEST);
}
