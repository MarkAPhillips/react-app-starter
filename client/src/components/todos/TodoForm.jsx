import React from 'react';
import { Mutation } from 'react-apollo';
import { Input, PrimaryButton } from '../../assets/styles/components';
import { InputPanel } from './styles';
import { create } from '../../graphql/mutations.graphql';
import { getAll } from '../../graphql/queries.graphql';
import { convertQueryToString } from '../../graphql/gqlHelpers';

const query = convertQueryToString(getAll);

export const TodoForm = () => {
  let input;
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
            createMutation({ variables: { text: input.value } });
            input.value = '';
          }}
          >
            <InputPanel>
              <Input
                type="text"
                id="input-add-todo"
                innerRef={(node) => {
                  input = node;
                }}
                placeholder="e.g. Complete Typescript course"
                required
              />
            </InputPanel>
            <PrimaryButton type="submit" >Add</PrimaryButton>
          </form>
        </div>)}
    </Mutation>);
};
