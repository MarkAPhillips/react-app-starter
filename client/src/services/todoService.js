import { post, patch, get, deleteItem } from './resource';

const resource = 'todos/';

export const createTodoItem = item => post(resource, item);

export const getTodoItems = () => get(resource);

export const updateTodoItem = (id, todoItem) => patch(`${resource}${id}`, todoItem);

export const deleteTodoItem = id => deleteItem(`${resource}${id}`);
