import React, { useState } from 'react';
import { TodoContainerPanel } from './styles';
import { Subheader } from '../../assets/styles/components';
import { TodoForm, TodoList } from './';


export const TodoContainer = () => {
  const { inputValue, setInputValue } = useState('');

  const handleChange = (evt) => {
    const { value } = evt.target;
    console.log('handleChange', inputValue);
    setInputValue(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('handleSubmit', inputValue);
    setInputValue('');
  };

  const handleStatusChange = (evt) => {
    const { checked, id } = evt.target;
    console.log('handleStatusChage', checked, id);
  };

  return (
    <TodoContainerPanel>
      <Subheader>Inbox</Subheader>
      <TodoList
        onStatusChange={handleStatusChange}
      />
      <TodoForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        inputValue={inputValue}
      />
    </TodoContainerPanel>
  );
};
