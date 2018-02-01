import todos, { ADD_REQUEST, ADD_SUCCESS, LOAD_SUCCESS } from '../../src/reducers/todoReducer';

describe('Todo reducer specs', () => {
  let state;
  const initialState = { list: {} };

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
    const expected = { list: { 1: { id: 1, item: 'Write a unit test', completed: false } } };
    expect(state).toEqual(expected);
  });

  it('should handle LOAD_SUCCESS', () => {
    state = todos(initialState, {
      type: LOAD_SUCCESS,
      todos: [{ id: 1, item: 'Write a unit test', completed: true },
        { id: 2, item: 'Find a job', completed: false }],
    });
    const expected = {
      list: {
        1: { id: 1, item: 'Write a unit test', completed: true },
        2: { id: 2, item: 'Find a job', completed: false },
      },
    };
    expect(state).toEqual(expected);
  });
});
