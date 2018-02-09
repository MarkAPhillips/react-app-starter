import { createTodoItem, getTodoItems, updateTodoItem } from '../../src/services/todoService';
import * as resource from '../../src/services/resource';

describe('TodoService specs', () => {
  it('should verify post is called with the correct arguments', () => {
    resource.post = jest.fn();
    const todoItem = { todo: 'Write a unit test', completed: false, id: 1 };
    createTodoItem(todoItem);
    expect(resource.post).toHaveBeenCalledWith('todos/', todoItem);
  });

  it('should verify get is called with the correct arguments', () => {
    resource.get = jest.fn();
    getTodoItems();
    expect(resource.get).toHaveBeenCalledWith('todos/');
  });

  it('should verify patch is called with the correct arguments', () => {
    resource.patch = jest.fn();
    const todoItem = { todo: 'Write a unit test', completed: false, id: 1 };
    updateTodoItem(1, todoItem);
    expect(resource.patch).toHaveBeenCalledWith('todos/1', todoItem);
  });
});
