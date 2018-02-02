import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItemPanel } from './styles';

const defaultProps = { item: {} };

const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.string,
    complete: PropTypes.bool,
  }),
};

export const TodoListItem = ({ item }) => <TodoListItemPanel>{item.item}</TodoListItemPanel>;

TodoListItem.defaultProps = defaultProps;
TodoListItem.propTypes = propTypes;
