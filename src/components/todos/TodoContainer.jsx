import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import { addTodoItem } from '../../reducers/todoReducer';
import { TodoContainerPanel } from './styles';
import { TodoAddItem } from './';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

const enhance = compose(
  connect(),
  withState('inputfield', 'setInputField', ''),
  withHandlers({
    onClick: props => () => {
      props.dispatch(addTodoItem(props.inputfield));
    },
    onChange: props => evt => props.setInputField(evt.target.value),
  }),
);

const component = ({ onClick, onChange }) => (
  <TodoContainerPanel><TodoAddItem onClick={onClick} onChange={onChange} /></TodoContainerPanel>
);

component.propTypes = propTypes;

export const TodoContainer = enhance(component);
