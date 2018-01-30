import { take } from 'redux-saga/effects';
import { todoAddSaga } from '../../src/sagas';
import { ADD_REQUEST } from '../../src/reducers/todoReducer';

describe('TodoAddSaga specs', () => {
  const gen = todoAddSaga();

  it('should wait for the user to add a todo', () => {
    expect(gen.next().value).toEqual(take(ADD_REQUEST));
  });
});
