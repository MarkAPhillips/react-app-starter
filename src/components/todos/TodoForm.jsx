import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Input, PrimaryButton } from '../../assets/styles/components';
import { InputPanel } from './styles';

const defaultProps = {
  isDisabled: true,
  onSubmit: _.noop,
  onChange: _.noop,
};

const propTypes = {
  onSubmit: PropTypes.func,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
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
