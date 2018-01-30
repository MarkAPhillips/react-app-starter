import { take } from 'redux-saga/effects';
import { ADD } from '../reducers/todoReducer';

export function* todoAddSaga() {
  const { todo } = yield take(ADD);
  console.log('Saga output', todo);
}
