import React from 'react';
import { Control, Form } from 'react-redux-form';
import PropTypes from 'prop-types';
import { Button } from '../../assets/styles/components';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export const TodoForm = ({ onSubmit }) => (
  <Form model="todo" onSubmit={onSubmit}>
    <Control.text model="todo.item" id="todo.item" />
    <Button type="submit">Add</Button>
  </Form>
);

TodoForm.propTypes = propTypes;
