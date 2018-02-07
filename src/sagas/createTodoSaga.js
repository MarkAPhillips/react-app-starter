import { take, call, put } from 'redux-saga/effects';
import { ADD_REQUEST, setTodoItem } from '../reducers/todosReducer';
import { createTodoItem } from '../services/todoService';
import build from '../utils/todoModelBuilder';

export function* createTodoSaga() {
  while (true) {
    const { payload } = yield take(ADD_REQUEST);
    const model = yield call(build, payload);
    const response = yield call(createTodoItem, model);
    yield put(setTodoItem(response.data));
  }
}
