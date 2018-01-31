import { take, call, put } from 'redux-saga/effects';
import { todoAddSaga } from '../../src/sagas';
import { createTodoItem } from '../../src/services/todoService';
import { ADD_REQUEST, setTodoItem } from '../../src/reducers/todoReducer';
import build from '../../src/utils/todoModelBuilder';

describe('TodoAddSaga specs', () => {
  const gen = todoAddSaga();
  let expected;
  let result;

  it('should wait for the user to add a todo', () => {
    expected = take(ADD_REQUEST);
    result = gen.next().value;
    expect(result).toEqual(expected);
  });

  it('should call the build model function with the correct arguments', () => {
    const todo = 'Write a unit test';
    expected = call(build, todo);
    result = gen.next({ todo }).value;
    expect(result).toEqual(expected);
  });

  it('should call the createTodoItem api call with the correct arguments', () => {
    const model = { id: 1, item: 'Write a unit test', completed: false };
    expected = call(createTodoItem, model);
    result = gen.next(model).value;
    expect(result).toEqual(expected);
  });

  it('should yield action SetTodoItem', () => {
    const response = { data: { id: 1, item: 'Write a unit test', completed: false } };
    expected = put(setTodoItem(response.data));
    result = gen.next(response).value;
    expect(result).toEqual(expected);
  });
});
