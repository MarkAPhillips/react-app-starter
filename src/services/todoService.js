import { post, patch, get, deleteItem } from './resource';

const resource = 'todos/';

export const createTodoItem = todoItem => post(resource, todoItem);

export const getTodoItems = () => get(resource);

export const updateTodoItem = (id, todoItem) => patch(`${resource}${id}`, todoItem);

export const deleteTodoItem = id => deleteItem(`${resource}${id}`);
