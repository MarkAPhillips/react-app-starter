import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Input, PrimaryButton } from '../../assets/styles/components';
import { InputPanel } from './styles';

const defaultProps = {
  isDisabled: true,
  inputValue: '',
  onSubmit: _.noop,
  onChange: _.noop,
};

const propTypes = {
  onSubmit: PropTypes.func,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
};

export const TodoForm = ({
  onSubmit, onChange, isDisabled, inputValue,
}) => (
  <form onSubmit={onSubmit}>
    <InputPanel>
      <Input
        type="text"
        onChange={onChange}
        id="input-add-todo"
        autoFocus
        value={inputValue}
        placeholder="Enter text..."
      />
    </InputPanel>
    <PrimaryButton type="submit" disabled={isDisabled}>Add</PrimaryButton>
  </form>
);

TodoForm.propTypes = propTypes;
TodoForm.defaultProps = defaultProps;
