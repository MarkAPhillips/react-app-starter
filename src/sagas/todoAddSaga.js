import { take } from 'redux-saga/effects';
import { ADD_REQUEST } from '../reducers/todoReducer';
// import { createTodoItem } from '../services/todoService';

export function* todoAddSaga() {
  const { todo } = yield take(ADD_REQUEST);
  // const response = yield call(createTodoItem);
  console.log('Saga output', todo);
}
