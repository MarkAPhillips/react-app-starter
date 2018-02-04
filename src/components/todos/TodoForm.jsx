import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button } from '../../assets/styles/components';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="item" component="input" type="text" />
    <Button type="submit">Add</Button>
  </form>
);

Form.propTypes = propTypes;

export const TodoForm = reduxForm({
  form: 'todo',
})(Form);
