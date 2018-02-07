import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounceHandler from '@hocs/debounce-handler';
import preventHandlersDefault from '@hocs/prevent-handlers-default';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { addTodoItem, getTodoItems, todosSelector } from '../../reducers/todosReducer';
import { addForm } from '../../reducers/formReducer';
import { TodoContainerPanel } from './styles';
import { TodoForm, TodoList } from './';

const defaultProps = { todos: {}, inputField: '' };

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputField: PropTypes.string,
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
  withState('inputField', 'setInputField', ''),
  withHandlers({
    handleSubmit: props => () => {
      props.dispatch(addTodoItem(props.inputField));
    },
    handleChange: props => evt => props.setInputField(evt.target.value),
  }),
  lifecycle({
    componentWillMount() {
      this.props.dispatch(getTodoItems());
      this.props.dispatch(addForm({ name: 'todo' }));
    },
  }),
  debounceHandler('handleChange', 300),
  preventHandlersDefault('handleSubmit'),
);

export const Component = ({
  handleSubmit, handleChange, todos, inputField,
}) => {
  const isDisabled = inputField.length === 0;
  return (
    <TodoContainerPanel>
      <TodoForm onSubmit={handleSubmit} onChange={handleChange} isDisabled={isDisabled} />
      <TodoList todos={todos} />
    </TodoContainerPanel>
  );
};

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export const TodoContainer = enhance(Component);
