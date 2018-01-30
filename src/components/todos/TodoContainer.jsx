import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { addTodoItem } from '../../reducers/todoReducer';
import { TodoContainerPanel } from './styles';
import { TodoAddItem } from './';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onClick: item => dispatch(addTodoItem(item)),
});

const enhance = compose(connect(null, mapDispatchToProps));

const component = ({ onClick }) =>
  <TodoContainerPanel><TodoAddItem onClick={onClick} /></TodoContainerPanel>;

component.propTypes = propTypes;

export const TodoContainer = enhance(component);
