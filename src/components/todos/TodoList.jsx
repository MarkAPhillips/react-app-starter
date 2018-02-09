import React from 'react';
import { TodoListItem } from './';

export const TodoList = ({ todos, onStatusChange }) =>
  Object.keys(todos)
    .map(key => <TodoListItem key={key} todo={todos[key]} onStatusChange={onStatusChange} />);
