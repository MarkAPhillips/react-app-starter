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
    const onChangeMock = jest.fn();
    const todo = { id: '71cda7b6-749b-47ec-937c-dca827dcd218', item: 'Write a unit test', completed: false };
    const wrapper = mount(<TodoListItem key={todo.id} todo={todo} onStatusChange={onChangeMock} />);
    expect(wrapper.html()).toContain('Write a unit test');
  });
});
