import React from 'react';
import { TodoContainerPanel } from './styles';
import { TodoForm, TodoList } from '.';

export const TodoContainer = () => (
  <TodoContainerPanel>
    <TodoList />
    <TodoForm />
  </TodoContainerPanel>
);
