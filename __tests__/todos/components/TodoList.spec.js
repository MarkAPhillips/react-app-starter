import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../src/todos/components/';

describe('TodoList specs', () => {
  it('should render the component ', () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.exists()).toEqual(true);
  });
});
