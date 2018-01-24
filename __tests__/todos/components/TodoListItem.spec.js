import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../src/todos/components/';

describe('TodoListItem renders', () => {
  it('should render the component ', () => {
    const component = shallow(<TodoListItem />);
    expect(component.exists()).toEqual(true);
  });
});
