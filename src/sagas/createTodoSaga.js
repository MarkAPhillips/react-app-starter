import { take, call, put } from 'redux-saga/effects';
import { ADD_REQUEST, setTodoItem } from '../reducers/todosReducer';
import { createTodoItem } from '../services/todoService';
import build from '../utils/todoModelBuilder';

export function* createTodoSaga() {
  const { todo } = yield take(ADD_REQUEST);
  const model = yield call(build, todo);
  const response = yield call(createTodoItem, model);
  yield put(setTodoItem(response.data));
}
