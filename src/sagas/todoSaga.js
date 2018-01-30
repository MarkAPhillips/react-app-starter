import { take } from 'redux-saga/effects';
import { ADD } from '../reducers/todoReducer';

export function* todoSaga() {
  const { todo } = yield take(ADD);
  console.log('Saga output', todo);
}
