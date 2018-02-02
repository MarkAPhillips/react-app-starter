import React from 'react';
import { TodoListItem } from './';

export const TodoList = ({ todos }) =>
  Object.keys(todos).map(key => <TodoListItem key={key} item={todos[key]} />);
