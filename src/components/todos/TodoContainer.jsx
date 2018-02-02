import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { addTodoItem, getTodoItems } from '../../reducers/todoReducer';
import { TodoContainerPanel } from './styles';
import { TodoAddItem, TodoList } from './';

const defaultProps = { todos: [] };

const propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  todos: state.list,
});

const enhance = compose(
  connect(mapStateToProps),
  withState('inputfield', 'setInputField', ''),
  withHandlers({
    onClick: props => () => {
      props.dispatch(addTodoItem(props.inputfield));
    },
    onChange: props => evt => props.setInputField(evt.target.value),
  }),
  lifecycle({
    componentWillMount() {
      this.props.dispatch(getTodoItems());
    },
  }),
);

const component = ({ onClick, onChange, todos }) => (
  <TodoContainerPanel>
    <TodoList todos={todos} />
    <TodoAddItem onClick={onClick} onChange={onChange} />
  </TodoContainerPanel>
);

component.propTypes = propTypes;
component.defaultProps = defaultProps;

export const TodoContainer = enhance(component);
