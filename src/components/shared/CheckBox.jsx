import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TodoItemText, CheckBoxLabel, CheckBoxPanel } from './styles';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
};

const InputCheckBox = styled.input``;

export const CheckBox = ({
  item, completed, onChange, id,
}) => (
  <CheckBoxPanel>
    <InputCheckBox
      type="checkbox"
      name="chkBox"
      defaultChecked={completed}
      onChange={onChange}
      id={id}
    />
    <CheckBoxLabel htmlFor="chkBox">
      <TodoItemText completed={completed}>{item}</TodoItemText>
    </CheckBoxLabel>
  </CheckBoxPanel>
);

CheckBox.propTypes = propTypes;
