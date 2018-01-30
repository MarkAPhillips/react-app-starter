import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../src/components/todos';

describe('TodoList specs', () => {
  it('should render the component ', () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.exists()).toEqual(true);
  });
});
