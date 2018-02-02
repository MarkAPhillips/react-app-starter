import { post, get } from './resource';

const resource = 'todos/';

/** POST a todo item */
export function createTodoItem(todoItem) {
  return post(resource, todoItem);
}

/** GET all todo items */
export function getTodoItems() {
  return get(resource);
}
