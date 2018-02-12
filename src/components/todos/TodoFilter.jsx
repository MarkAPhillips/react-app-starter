import React from 'react';
import { PrimaryButton } from '../../assets/styles/components';
import { TodoFilterPanel } from './styles';

export const TodoFilter = () =>
  (
    <TodoFilterPanel>
      <PrimaryButton>Show all</PrimaryButton>
      <PrimaryButton>Hide Completed</PrimaryButton>
    </TodoFilterPanel>);
