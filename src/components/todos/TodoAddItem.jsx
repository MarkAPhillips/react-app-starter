import React from 'react';
import PropTypes from 'prop-types';
import { TodoAddItemPanel } from './styles';
import { Input, Button } from '../../assets/styles/components';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const TodoAddItem = ({ onClick, onChange }) => (
  <TodoAddItemPanel>
    <Input type="text" onChange={onChange} id="input-add-todo" />
    <Button onClick={onClick}>Add</Button>
  </TodoAddItemPanel>
);

TodoAddItem.propTypes = propTypes;
