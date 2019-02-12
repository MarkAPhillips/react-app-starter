import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Query } from 'react-apollo';
import { getAllTodos } from '../../graphql/queries.graphql';
import { TodoListItem } from './';
import { TodoListPanel } from './styles';

const defaultProps = {
  onStatusChange: _.noop,
};

const propTypes = {
  onStatusChange: PropTypes.func,
};

export const TodoList = ({ onStatusChange }) =>
  (
    <Query query={getAllTodos}>
      {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return (
        <TodoListPanel>
          {data.todos.map(todo => (<TodoListItem
            key={todo.id}
            todo={todo}
            onStatusChange={onStatusChange}
          />))}
        </TodoListPanel>
      );
    }}
    </Query>
  );

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;
