import { post, put, get } from './resource';

const resource = 'todos/';

/** Create a new todo item */
export function createTodoItem(todoItem) {
  return post(resource, todoItem);
}

/** Get all todo items  */
export function getTodoItems() {
  return get(resource);
}

/** Update a todo item  */
export function updateTodoItem(id, todoItem) {
  return put(`${resource}${id}`, todoItem);
}
