import React from 'react';
import PropTypes from 'prop-types';
import { Input, PrimaryButton } from '../../assets/styles/components';
import { InputPanel } from './styles';

const defaultProps = { isDisabled: true };

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export const TodoForm = ({ onSubmit, onChange, isDisabled }) => (
  <form onSubmit={onSubmit}>
    <InputPanel>
      <Input type="text" onChange={onChange} id="input-add-todo" autoFocus />
    </InputPanel>
    <PrimaryButton type="submit" disabled={isDisabled}>Add</PrimaryButton>
  </form>
);

TodoForm.propTypes = propTypes;
TodoForm.defaultProps = defaultProps;
