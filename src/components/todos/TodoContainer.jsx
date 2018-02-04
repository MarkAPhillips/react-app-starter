import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { addTodoItem, getTodoItems, todosSelector } from '../../reducers/todosReducer';
import { TodoContainerPanel } from './styles';
import { TodoForm, TodoList } from './';

const defaultProps = { todos: {} };

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  todos: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.string,
    complete: PropTypes.bool,
  })),
};

const mapStateToProps = state => ({
  todos: todosSelector(state),
});

const enhance = compose(
  connect(mapStateToProps),
  withHandlers({
    handleSubmit: props => (values) => {
      props.dispatch(addTodoItem(values.item));
    },
  }),
  lifecycle({
    componentWillMount() {
      this.props.dispatch(getTodoItems());
    },
  }),
);

export const Component = ({ handleSubmit, todos }) => (
  <TodoContainerPanel>
    <TodoList todos={todos} />
    <TodoForm onSubmit={handleSubmit} />
  </TodoContainerPanel>
);

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export const TodoContainer = enhance(Component);
