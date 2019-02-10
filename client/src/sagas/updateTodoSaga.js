import { take, call, put } from 'redux-saga/effects';
import { STATUS_CHANGE_REQUEST, updateTodo } from '../reducers/todosReducer';
import { updateTodoItem } from '../services/todoService';

export function* updateTodoSaga() {
  while (true) {
    const { payload } = yield take(STATUS_CHANGE_REQUEST);
    yield call(updateTodoItem, payload.id, payload);
    yield put(updateTodo(payload));
  }
}
