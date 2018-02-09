import { take, call, put } from 'redux-saga/effects';
import { ADD_REQUEST, addTodo } from '../reducers/todosReducer';
import { createTodoItem } from '../services/todoService';
import { todo } from '../utils/modelBuilder';

export function* createTodoSaga() {
  while (true) {
    const { payload } = yield take(ADD_REQUEST);
    const model = yield call(todo, payload);
    const response = yield call(createTodoItem, model);
    yield put(addTodo(response.data));
  }
}
