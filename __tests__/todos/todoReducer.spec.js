import uuidv4 from 'uuid/v4';
import todos, { ADD } from '../../src/todos/todoReducer';

// TODO: Review this process for mocking of the uuid module
// Revew how to mock in globally using manual mocks

jest.mock('uuid/v4');
uuidv4.mockImplementation(() => 1);

describe('Todo reducer specs', () => {
  let todoState;
  const initialState = { byId: [], byHash: {} };

  it('should return the initial state', () => {
    todoState = todos(undefined, {});
    expect(todoState).toEqual(initialState);
  });

  it('should handle ADD', () => {
    todoState = todos(initialState, {
      type: ADD,
      todo: 'Write a unit test',
    });
    const expected = { byId: [1], byHash: { 1: { todo: 'Write a unit test', completed: false } } };

    expect(todoState).toEqual(expected);
  });
});
