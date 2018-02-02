import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { TodoListItem } from '../../../src/components/todos';

describe('TodoListItem specs', () => {
  it('should render the component ', () => {
    const wrapper = shallow(<TodoListItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should output the item text', () => {
    const todo = { id: 1, item: 'Write a unit test', completed: false };
    const wrapper = shallow(<TodoListItem item={todo} />).dive();
    expect(wrapper.text()).toEqual('Write a unit test');
  });
});
