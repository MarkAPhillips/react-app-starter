import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { TodoListItemPanel } from './styles';
import { CheckBox } from '../shared';

const defaultProps = {
  todo: {},
  onStatusChange: _.noop,
};

const propTypes = {
  onStatusChange: PropTypes.func,
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
      <CheckBox id={id} completed={completed} onChange={onStatusChange} item={item} />
    </TodoListItemPanel>
  );
};

TodoListItem.defaultProps = defaultProps;
TodoListItem.propTypes = propTypes;
