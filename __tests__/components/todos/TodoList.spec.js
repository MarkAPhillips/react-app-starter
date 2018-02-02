import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../src/components/todos';

describe('TodoList specs', () => {
  const todos = [];
  it('should render the component ', () => {
    const wrapper = shallow(<TodoList todos={todos} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
