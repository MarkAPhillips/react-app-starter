import React from 'react';
import { shallow } from 'enzyme';
import { TodoAddItem } from '../../../src/todos/components';

describe('TodoAddItem renders', () => {
  it('should render the component ', () => {
    const component = shallow(<TodoAddItem />);
    expect(component.exists()).toEqual(true);
  });
});
