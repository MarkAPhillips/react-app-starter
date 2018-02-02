import { take } from 'redux-saga/effects';
import { getTodosSaga } from '../../src/sagas';
import { LOAD_REQUEST } from '../../src/reducers/todoReducer';

describe('GetTodosSaga specs', () => {
  const gen = getTodosSaga();
  let expected;
  let result;

  it('should wait for the load request to be initiated', () => {
    expected = take(LOAD_REQUEST);
    result = gen.next().value;
    expect(result).toEqual(expected);
  });
});
