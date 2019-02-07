import React from 'react';
import { TodoListItem } from './';

export const TodoList = ({ todos, onStatusChange }) =>
  todos.map(todo => (<TodoListItem
    key={todo.id}
    todo={todo}
    onStatusChange={onStatusChange}
  />));
