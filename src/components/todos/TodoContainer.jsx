import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import debounceHandler from '@hocs/debounce-handler';
import preventHandlersDefault from '@hocs/prevent-handlers-default';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { requestAdd, requestLoad, todosSelector, requestStatusChange } from '../../reducers/todosReducer';
import { FORMS } from '../../constants';
import { addForm, disableForm, formSelector } from '../../reducers/formReducer';
import { TodoContainerPanel } from './styles';
import { TodoFilter, TodoForm, TodoList } from './';

const defaultProps = { todos: {}, form: {} };
const formId = 1;

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleStatusChange: PropTypes.func.isRequired,
  form: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  todos: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.string,
    complete: PropTypes.bool,
  })),
};

const mapStateToProps = state => ({
  todos: todosSelector(state),
  form: formSelector(state, formId),
});

const enhance = compose(
  connect(mapStateToProps),
  withState('inputField', 'setInputField', ''),
  withHandlers({
    handleSubmit: props => () => {
      props.dispatch(requestAdd(props.inputField));
    },
    handleChange: props => (evt) => {
      const entry = evt.target.value;
      props.setInputField(entry);
      const disabled = !!isEmpty(entry);
      props.dispatch(disableForm({ id: formId, disabled }));
    },
    handleStatusChange: props => (evt) => {
      const { checked, id } = evt.target;
      props.dispatch(requestStatusChange({ id, completed: checked }));
    },
  }),
  lifecycle({
    componentWillMount() {
      this.props.dispatch(requestLoad());
      this.props.dispatch(addForm(FORMS[formId]));
    },
  }),
  debounceHandler('handleChange', 300),
  preventHandlersDefault('handleSubmit'),
);

export const Component = ({
  handleSubmit, handleChange, handleStatusChange, todos, form,
}) => {
  const { disabled } = form;
  return (
    <TodoContainerPanel>
      <TodoForm onSubmit={handleSubmit} onChange={handleChange} isDisabled={disabled} />
      <TodoList todos={todos} onStatusChange={handleStatusChange} />
      <TodoFilter />
    </TodoContainerPanel>
  );
};

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export const TodoContainer = enhance(Component);
