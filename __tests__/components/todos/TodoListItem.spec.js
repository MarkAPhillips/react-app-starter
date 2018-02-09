import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import { TodoListItem } from '../../../src/components/todos';

describe('TodoListItem specs', () => {
  it('should render the component ', () => {
    const wrapper = shallow(<TodoListItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render the correct output', () => {
    const todo = { id: 1, item: 'Write a unit test', completed: false };
    const wrapper = mount(<TodoListItem item={todo} />);
    expect(wrapper.html()).toContain('Write a unit test');
  });
});
