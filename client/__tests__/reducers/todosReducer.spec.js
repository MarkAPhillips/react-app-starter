import todos, { ADD_REQUEST, ADD_SUCCESS, LOAD_SUCCESS, STATUS_CHANGE_SUCCESS, DELETE_SUCCESS } from '../../src/reducers/todosReducer';

describe('Todo reducer specs', () => {
  let state;
  let initialState;

  it('should return the initial state', () => {
    initialState = { list: {} };
    state = todos(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle ADD_REQUEST', () => {
    initialState = { list: {} };
    state = todos(initialState, {
      type: ADD_REQUEST,
    });
    expect(state).toEqual(initialState);
  });

  it('should handle ADD_SUCCESS', () => {
    initialState = { list: {} };
    state = todos(initialState, {
      type: ADD_SUCCESS,
      payload: { id: 1, item: 'Write a unit test', completed: false },
    });
    const expected = { list: { 1: { id: 1, item: 'Write a unit test', completed: false } } };
    expect(state).toEqual(expected);
  });

  it('should handle LOAD_SUCCESS', () => {
    initialState = { list: {} };
    state = todos(initialState, {
      type: LOAD_SUCCESS,
      payload: [{ id: 1, item: 'Write a unit test', completed: true },
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

  it('should handle STATUS_CHANGE_SUCCESS', () => {
    initialState = {
      list: {
        1: { id: 1, item: 'todo', completed: false },
        2: { id: 2, item: 'anothertodo', completed: false },
      },
    };
    state = todos(initialState, {
      type: STATUS_CHANGE_SUCCESS,
      payload: { id: 1, completed: true },
    });
    const expected = {
      list: {
        1: { id: 1, item: 'todo', completed: true },
        2: { id: 2, item: 'anothertodo', completed: false },
      },
    };
    expect(state).toEqual(expected);
  });

  it('should handle DELETE_SUCCESS', () => {
    initialState = {
      list: {
        1: { id: 1, item: 'todo', completed: false },
        2: { id: 2, item: 'anothertodo', completed: false },
      },
    };
    state = todos(initialState, {
      type: DELETE_SUCCESS,
      payload: 1,
    });
    const expected = {
      list: {
        2: { id: 2, item: 'anothertodo', completed: false },
      },
    };
    expect(state).toEqual(expected);
  });
});
