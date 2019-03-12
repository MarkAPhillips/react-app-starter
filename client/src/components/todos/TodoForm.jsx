import React, { useRef } from 'react';
import { Mutation } from 'react-apollo';
import { Input, PrimaryButton } from '../../assets/styles/components';
import { InputPanel } from './styles';
import { create } from '../../graphql/mutations.graphql';
import { getAll } from '../../graphql/queries.graphql';
import { convertQueryToString } from '../../graphql/gqlHelpers';

const query = convertQueryToString(getAll);

export const TodoForm = () => {
  const input = useRef('');
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
          <form onSubmit={(e) => {
            e.preventDefault();
            createMutation({ variables: { text: input.current.value } });
            input.current.value = '';
          }}
          >
            <InputPanel>
              <Input
                type="text"
                id="input-add-todo"
                ref={input}
                placeholder="e.g. Complete Typescript course"
                required
              />
            </InputPanel>
            <PrimaryButton type="submit">Add</PrimaryButton>
          </form>
        </div>
      )}
    </Mutation>
  );
};
