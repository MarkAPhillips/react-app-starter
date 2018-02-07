import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from '../../assets/styles/components';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const TodoForm = ({ onSubmit, onChange, isDisabled }) => (
  <form onSubmit={onSubmit}>
    <Input type="text" onChange={onChange} id="input-add-todo" autoFocus />
    <Button type="submit" disabled={isDisabled}>Add</Button>
  </form>
);

TodoForm.propTypes = propTypes;