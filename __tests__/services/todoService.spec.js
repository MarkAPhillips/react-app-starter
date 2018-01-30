import { createTodoItem } from '../../src/services/todoService';
import * as resource from '../../src/services/resource';

describe('TodoService specs', () => {
  resource.post = jest.fn();
  it('should call post with the correct arguments', () => {
    const todoItem = { todo: 'Write a unit test', completed: false, id: 1 };
    createTodoItem(todoItem);
    expect(resource.post).toHaveBeenCalledWith('todos/', todoItem);
  });
});
