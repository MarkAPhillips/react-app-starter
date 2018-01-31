import todos, { ADD_REQUEST, ADD_SUCCESS } from '../../src/reducers/todoReducer';

describe('Todo reducer specs', () => {
  let state;
  const initialState = { byId: [], byHash: {} };

  it('should return the initial state', () => {
    state = todos(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle ADD_REQUEST', () => {
    state = todos(initialState, {
      type: ADD_REQUEST,
    });
    expect(state).toEqual(initialState);
  });

  it('should handle ADD_SUCCESS', () => {
    state = todos(initialState, {
      type: ADD_SUCCESS,
      todo: { id: 1, item: 'Write a unit test', completed: false },
    });
    const expected = { byId: [1], byHash: { 1: { item: 'Write a unit test', completed: false } } };
    expect(state).toEqual(expected);
  });
});
