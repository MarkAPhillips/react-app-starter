import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Input, PrimaryButton } from '../../assets/styles/components';
import { InputPanel } from './styles';
import { create } from '../../graphql/mutations.graphql';
import { getAll } from '../../graphql/queries.graphql';
import { convertQueryToString } from '../../graphql/gqlHelpers';

const query = convertQueryToString(getAll);

export const TodoForm = () => {
  const [text, setTextValue] = useState('');

  const handleTextChange = e => setTextValue(e.target.value);

  const handleSubmit = (e, createMutation) => {
    e.preventDefault();
    createMutation({ variables: { text } });
    setTextValue('');
  };

  const disabled = text === '';

  return (
    <Mutation
      mutation={create}
      update={(cache, { data: { createTodo } }) => {
        const { todos } = cache.readQuery({ query });
        cache.writeQuery({
          query,
          data: { todos: todos.concat([createTodo]) },
        });
      }}
    >
      {createMutation => (
        <div>
          <form onSubmit={e => handleSubmit(e, createMutation)}>
            <InputPanel>
              <Input
                type="text"
                value={text}
                id="input-add-todo"
                onChange={e => handleTextChange(e)}
                placeholder="e.g. Complete Typescript course"
              />
            </InputPanel>
            <PrimaryButton disabled={disabled} type="submit">Add</PrimaryButton>
          </form>
        </div>
      )}
    </Mutation>
  );
};
