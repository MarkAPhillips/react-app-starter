import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../src/todos/components/';

describe('TodoList renders', () => {
  it('should render the component ', () => {
    const component = shallow(<TodoList />);
    expect(component.exists()).toEqual(true);
  });
});
