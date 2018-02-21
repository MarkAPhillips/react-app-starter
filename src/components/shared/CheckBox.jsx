import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TodoItemText } from './styles';
import { fontAwesome } from '../../assets/styles/variables';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
};

const CheckBoxPanel = styled.div`
  padding: 0.2em;
  font-size: 1.1em;
  > input { opacity: 0; }
  > input + label {
    &:before {
      font-family: ${fontAwesome.family};
      content: "${fontAwesome.content.fa_square_o}";
      margin-left: -10px;
    }
  }
  > input:checked + label {
    &:before {
      content: "${fontAwesome.content.fa_checked_square_o}";
    }
  }
`;

const CheckBoxLabel = styled.label`
  display: inline-block;
`;

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
