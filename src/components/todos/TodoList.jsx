import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { TodoListItem } from './';
import { TodoListPanel } from './styles';

const defaultProps = {
  todos: [],
  onStatusChange: _.noop,
};

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.string,
    complete: PropTypes.bool,
  })),
  onStatusChange: PropTypes.func,
};

export const TodoList = ({ todos, onStatusChange }) =>
  (
    <TodoListPanel>
      {todos.map(todo => (<TodoListItem
        key={todo.id}
        todo={todo}
        onStatusChange={onStatusChange}
      />))}
    </TodoListPanel>);

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;
