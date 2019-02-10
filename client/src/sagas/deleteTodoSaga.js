import { take, call, put } from 'redux-saga/effects';
import { DELETE_REQUEST, deleteTodo } from '../reducers/todosReducer';
import { deleteTodoItem } from '../services/todoService';

export function* deleteTodoSaga() {
  while (true) {
    const { payload } = yield take(DELETE_REQUEST);
    const { id } = payload;
    yield call(deleteTodoItem, id);
    yield put(deleteTodo(id));
  }
}
