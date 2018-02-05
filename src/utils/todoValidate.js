import isEmpty from 'lodash/isEmpty';

const validate = (values) => {
  const errors = {};
  if (isEmpty(values.item)) {
    errors.item = 'Required';
  }
  return errors;
};

export default validate;
