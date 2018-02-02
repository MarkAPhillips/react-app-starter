import { take } from 'redux-saga/effects';
import { LOAD_REQUEST } from '../reducers/todoReducer';

export function* fetchTodosSaga() {
  yield take(LOAD_REQUEST);
}
