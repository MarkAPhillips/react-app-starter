import React, { Fragment } from 'react';
import _ from 'lodash';
import { Query } from 'react-apollo';
import { getAll } from '../../graphql/queries.graphql';
import { TodoListItem } from '.';
import { Subheader } from '../../assets/styles/components';
import { TodoListPanel } from './styles';

export const TodoList = () => (
  <Query query={getAll}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      if (_.isEmpty(data.todos)) return null;
      return (
        <Fragment>
          <Subheader>Inbox</Subheader>
          <TodoListPanel>
            {data.todos.map(todo => (
              <TodoListItem
                key={todo.id}
                todo={todo}
              />
            ))}
          </TodoListPanel>
        </Fragment>
      );
    }}
  </Query>
);
