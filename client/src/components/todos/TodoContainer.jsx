import React, { useState } from 'react';
import { TodoContainerPanel } from './styles';
import { TodoForm, TodoList } from './';

export const TodoContainer = () => {
  const [inputValue, setInputValue] = useState('');

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

  return (
    <TodoContainerPanel>
      <TodoList />
      <TodoForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        inputValue={inputValue}
      />
    </TodoContainerPanel>
  );
};
