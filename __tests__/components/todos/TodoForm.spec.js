import React from 'react';
import { shallow } from 'enzyme';
import { TodoForm } from '../../../src/components/todos/TodoForm';

describe('TodoForm specs', () => {
  it('should render the component ', () => {
    const wrapper = shallow(<TodoForm />);
    expect(wrapper.exists()).toEqual(true);
  });
});
