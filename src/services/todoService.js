import { post } from './resource';

/** POST a todo item */
export function createTodoItem(todoItem) {
  const resource = 'todos/';
  return post(resource, todoItem);
}
