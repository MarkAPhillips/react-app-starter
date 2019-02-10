import { take, call, put } from 'redux-saga/effects';
import { deleteTodoSaga } from '../../src/sagas';
import { deleteTodoItem } from '../../src/services/todoService';
import { DELETE_REQUEST, deleteTodo } from '../../src/reducers/todosReducer';

describe('deleteTodoSaga specs', () => {
  const gen = deleteTodoSaga();
  let expected;
  let result;

  it('should wait for the user to delete a todo', () => {
    expected = take(DELETE_REQUEST);
    result = gen.next().value;
    expect(result).toEqual(expected);
  });

  it('should call the deleteTodoItem api call with the correct arguments', () => {
    const payload = { id: 1 };
    expected = call(deleteTodoItem, payload.id);
    result = gen.next({ payload }).value;
    expect(result).toEqual(expected);
  });

  it('should yield action deleteTodo', () => {
    const payload = { id: 1 };
    expected = put(deleteTodo(payload.id));
    result = gen.next({ payload }).value;
    expect(result).toEqual(expected);
  });
});
