import { todoFormPlugin } from '../../src/reducers/todoFormPlugin';
import { ADD_SUCCESS } from '../../src/reducers/todosReducer';

describe('TodoForm plugin specs', () => {
  let todo;
  let state;

  beforeEach(() => {
    ({ todo } = todoFormPlugin);
  });

  it('should return the initial state', () => {
    state = todo({}, {});
    expect(state).toEqual({});
  });

  it('should handle ADD_SUCCESS', () => {
    state = todo({}, {
      type: ADD_SUCCESS,
    });
    expect(state).toBeUndefined();
  });
});
