import { take, call, put } from 'redux-saga/effects';
import { updateTodoSaga } from '../../src/sagas';
import { updateTodoItem } from '../../src/services/todoService';
import { STATUS_CHANGE_REQUEST, updateTodo } from '../../src/reducers/todosReducer';

describe('UpdateTodoSaga specs', () => {
  const gen = updateTodoSaga();
  let expected;
  let result;

  it('should wait for the user to update a todo', () => {
    expected = take(STATUS_CHANGE_REQUEST);
    result = gen.next().value;
    expect(result).toEqual(expected);
  });

  it('should call the updateTodoItem api call with the correct arguments', () => {
    const payload = { id: 1, completed: false };
    expected = call(updateTodoItem, payload.id, payload);
    result = gen.next({ payload }).value;
    expect(result).toEqual(expected);
  });

  it('should yield action updateTodo', () => {
    const payload = { id: 1, completed: false };
    expected = put(updateTodo(payload));
    result = gen.next({ payload }).value;
    expect(result).toEqual(expected);
  });
});
