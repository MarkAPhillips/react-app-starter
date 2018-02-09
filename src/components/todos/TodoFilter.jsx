import React from 'react';
import { Button } from '../../assets/styles/components';
import { TodoFilterPanel } from './styles';

export const TodoFilter = () =>
  (
    <TodoFilterPanel>
      <Button>Show all</Button>
      <Button>Hide Completed</Button>
    </TodoFilterPanel>);
