import { take, call, put } from 'redux-saga/effects';
import { createTodoSaga } from '../../src/sagas';
import { createTodoItem } from '../../src/services/todoService';
import { ADD_REQUEST, addTodo } from '../../src/reducers/todosReducer';

describe('createTodoSaga specs', () => {
  const gen = createTodoSaga();
  let expected;
  let result;

  it('should wait for the user to add a todo', () => {
    expected = take(ADD_REQUEST);
    result = gen.next().value;
    expect(result).toEqual(expected);
  });

  it('should call the createTodoItem api call with the correct arguments', () => {
    const payload = 'Write a unit test';
    expected = call(createTodoItem, payload);
    result = gen.next({ payload }).value;
    expect(result).toEqual(expected);
  });

  it('should yield action addTodo', () => {
    const response = { data: { id: 1, item: 'Write a unit test', completed: false } };
    expected = put(addTodo(response.data));
    result = gen.next(response).value;
    expect(result).toEqual(expected);
  });
});
