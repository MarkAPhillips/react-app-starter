import { take, call, put } from 'redux-saga/effects';
import { ADD_REQUEST, addTodo } from '../reducers/todosReducer';
import { createTodoItem } from '../services/todoService';

export function* createTodoSaga() {
  while (true) {
    const { payload } = yield take(ADD_REQUEST);
    const response = yield call(createTodoItem, payload);
    yield put(addTodo(response.data));
  }
}
