import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { TodoListItemComponent } from '../../../src/components/todos';

xdescribe('TodoListItem specs', () => {
  it('should render the correct output', () => {
    const todo = { id: '71cda7b6-749b-47ec-937c-dca827dcd218', item: 'Write a unit test', completed: false };
    const onChangeMock = jest.fn();
    const wrapper = mount(<TodoListItemComponent
      key={todo.id}
      todo={todo}
      onStatusChange={onChangeMock}
    />);
    expect(wrapper.html()).toContain('Write a unit test');
  });
});
