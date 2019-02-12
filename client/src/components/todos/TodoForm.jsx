import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Input, PrimaryButton } from '../../assets/styles/components';
import { InputPanel } from './styles';

const defaultProps = {
  inputValue: '',
  onSubmit: _.noop,
  onChange: _.noop,
};

const propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
};

export const TodoForm = ({
  onSubmit, onChange, inputValue,
}) => (
  <form onSubmit={onSubmit}>
    <InputPanel>
      <Input
        type="text"
        onChange={onChange}
        id="input-add-todo"
        value={inputValue}
        placeholder="e.g. Complete Typescript course"
      />
    </InputPanel>
    <PrimaryButton type="submit" >Add</PrimaryButton>
  </form>
);

TodoForm.propTypes = propTypes;
TodoForm.defaultProps = defaultProps;
