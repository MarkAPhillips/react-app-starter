import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoForm } from '../../../src/components/todos';

describe('TodoForm Item specs', () => {
  it('should render the component ', () => {
    const wrapper = shallow(<TodoForm />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should call the onSubmit handler when the form is submitted  ', () => {
    const onSubmitMock = jest.fn();
    const wrapper = mount(<TodoForm onSubmit={onSubmitMock} />);
    wrapper.find('form').simulate('submit');
    expect(onSubmitMock).toBeCalled();
  });

  it('should call the onChange handler when text is inputted', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(<TodoForm onChange={onChangeMock} />);
    wrapper.find('input').simulate('change', { target: { value: 'Write a unit test' } });
    expect(onChangeMock).toBeCalled();
  });
});
