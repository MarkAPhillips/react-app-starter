import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_REQUEST, setTodos } from '../reducers/todosReducer';
import { getTodoItems } from '../services/todoService';

export function* fetchTodosSaga() {
  const response = yield call(getTodoItems);
  const payload = yield response.data;
  yield put(setTodos(payload));
}

export function* watchTodosSaga() {
  yield takeEvery(LOAD_REQUEST, fetchTodosSaga);
}

