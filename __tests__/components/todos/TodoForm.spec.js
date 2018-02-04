import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../../../src/components/todos/TodoForm';

describe('TodoForm specs', () => {
  it('should render the component ', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.exists()).toEqual(true);
  });
});
