import { take, put, call } from 'redux-saga/effects';
import { LOAD_REQUEST, setTodoItems } from '../reducers/todosReducer';
import { getTodoItems } from '../services/todoService';

export function* fetchTodosSaga() {
  yield take(LOAD_REQUEST);
  const response = yield call(getTodoItems);
  const payload = yield response.data;
  yield put(setTodoItems(payload));
}
