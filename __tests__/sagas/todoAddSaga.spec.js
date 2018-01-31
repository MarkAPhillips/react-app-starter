import { take, call } from 'redux-saga/effects';
import { todoAddSaga } from '../../src/sagas';
// import { createTodoItem } from '../../src/services/todoService';
import { ADD_REQUEST } from '../../src/reducers/todoReducer';
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

  it('should call the build model with the correct arguments', () => {
    const todo = 'Write unit test';
    expected = call(build, todo);
    result = gen.next({ todo }).value;
    expect(result).toEqual(expected);
  });
});
