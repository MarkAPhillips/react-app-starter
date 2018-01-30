
import error, { ADD } from '../../src/reducers/errorReducer';

describe('Error reducer specs', () => {
  let state;
  const initialState = [];

  it('should return the initial state', () => {
    state = error(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle ADD', () => {
    state = error(initialState, {
      type: ADD,
      error: 'Type error object undefined',
    });
    const expected = ['Type error object undefined'];

    expect(state).toEqual(expected);
  });
});
