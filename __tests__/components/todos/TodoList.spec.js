import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../src/components/todos';

describe('TodoList specs', () => {
  const todos = [{
    id: '71cda7b6-749b-47ec-937c-dca827dcd218',
  }];
  it('should render the component ', () => {
    const wrapper = shallow(<TodoList todos={todos} onStatusChange={() => {}} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
