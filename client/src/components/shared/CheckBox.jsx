import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { TodoItemText, CheckBoxLabel, CheckBoxPanel } from './styles';

const defaultProps = {
  onChange: _.noop,
};

const propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
};

export const CheckBox = ({
  item, completed, onChange, id,
}) => (
  <CheckBoxPanel>
    <input
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
CheckBox.defaultProps = defaultProps;
