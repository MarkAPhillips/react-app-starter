/* eslint-disable react/jsx-indent */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { requestAdd, requestLoad, todosDefaultSelector, requestStatusChange } from '../../reducers/todosReducer';
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
  onLoad: PropTypes.func.isRequired,
  form: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.string,
    complete: PropTypes.bool,
  })),
};

const mapStateToProps = state => ({
  todos: todosDefaultSelector(state),
  form: formSelector(state, formId),
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(requestLoad());
    dispatch(addForm(FORMS[formId]));
  },
  handleSubmit: value => dispatch(requestAdd(value)),
  handleStatusChange: (id, checked) => dispatch(requestStatusChange({ id, completed: checked })),
  handleChange: (value) => {
    const disabled = !!isEmpty(value);
    dispatch(disableForm({ id: formId, disabled }));
  },
});

class TodoContainerComponent extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps
  state = {
    inputField: '',
  }
  componentDidMount() {
    this.props.onLoad();
  }
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.handleChange(value);
    this.setState({
      inputField: value,
    });
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleSubmit(this.state.inputField);
    this.setState({ inputField: '' });
  }
  handleStatusChange = (evt) => {
    const { checked, id } = evt.target;
    this.props.handleStatusChange(id, checked);
  }
  render() {
    const { disabled } = this.props.form;
    return (
      <TodoContainerPanel>
        <TodoForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          isDisabled={disabled}
        />
        <TodoList
          todos={this.props.todos}
          onStatusChange={this.handleStatusChange}
        />
        <TodoFilter />
      </TodoContainerPanel>
    );
  }
}

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoContainerComponent);
