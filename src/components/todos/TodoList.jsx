import React from 'react';
import TodoListItem from './';

export const TodoList = ({ todos }) => todos.map((todo) => {
  const { item } = todo;
  return <TodoListItem item={item} />;
});
