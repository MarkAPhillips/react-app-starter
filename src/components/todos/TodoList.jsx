import React from 'react';
import { TodoListItem } from './';

export const TodoList = ({ todos, handleStatusChange }) =>
  todos.map(todo => (<TodoListItem
    key={todo.id}
    todo={todo}
    handleStatusChange={handleStatusChange}
  />));
