import { take, call, put } from 'redux-saga/effects';
import uuidv4 from 'uuid/v4';
import { ADD_REQUEST, setTodoItem } from '../reducers/todoReducer';
import { createTodoItem } from '../services/todoService';

function buildModel(todo) {
  return {
    id: uuidv4(),
    item: todo,
    completed: false,
  };
}

export function* todoAddSaga() {
  const { todo } = yield take(ADD_REQUEST);
  const model = buildModel(todo);
  const response = yield call(createTodoItem, model);
  yield put(setTodoItem(response.data));
}
