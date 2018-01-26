import React from 'react';
import { shallow } from 'enzyme';
import { TodoContainer } from '../../../src/todos/components/';

describe('TodoContainer renders', () => {
  it('should render the component ', () => {
    const component = shallow(<TodoContainer />);
    expect(component.exists()).toEqual(true);
  });
});
