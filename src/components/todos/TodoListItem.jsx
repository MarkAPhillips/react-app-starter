import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItemPanel, TodoItemText } from './styles';
import { Input } from '../../assets/styles/components';

const defaultProps = { todo: {} };

const propTypes = {
  onStatusChange: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

export const TodoListItem = ({ todo, onStatusChange }) => {
  const { id, completed, item } = todo;
  return (
    <TodoListItemPanel>
      <Input type="checkbox" defaultChecked={completed} onChange={onStatusChange} id={id} />
      <TodoItemText completed={completed}>{item}</TodoItemText>
    </TodoListItemPanel>
  );
};

TodoListItem.defaultProps = defaultProps;
TodoListItem.propTypes = propTypes;
