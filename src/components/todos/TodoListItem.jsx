import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItemPanel, TodoItemText } from './styles';
import { Input } from '../../assets/styles/components';

const defaultProps = { item: {} };

const propTypes = {
  onStatusChange: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

export const TodoListItem = ({ item, onStatusChange }) => (
  <TodoListItemPanel>
    <Input type="checkbox" onChange={onStatusChange} id={item.id} />
    <TodoItemText completed={item.completed}>{item.item}</TodoItemText>
  </TodoListItemPanel>);

TodoListItem.defaultProps = defaultProps;
TodoListItem.propTypes = propTypes;
