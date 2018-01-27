import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../src/todos/components/';

describe('TodoListItem specs', () => {
  it('should render the component ', () => {
    const wrapper = shallow(<TodoListItem />);
    expect(wrapper.exists()).toEqual(true);
  });
});
