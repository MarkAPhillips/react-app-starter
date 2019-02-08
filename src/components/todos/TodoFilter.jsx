import React from 'react';
import { StandardButton } from '../../assets/styles/components';
import { TodoFilterPanel } from './styles';

export const TodoFilter = () =>
  (
    <TodoFilterPanel>
      <StandardButton>Show completed</StandardButton>
    </TodoFilterPanel>);
