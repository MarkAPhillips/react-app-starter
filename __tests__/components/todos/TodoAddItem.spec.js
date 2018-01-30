import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoAddItem } from '../../../src/components/todos';

describe('TodoAddItem specs', () => {
  it('should render the component ', () => {
    const wrapper = shallow(<TodoAddItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should call the onClick prop when clicked ', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<TodoAddItem onClick={onClickMock} />);
    wrapper.find('button').simulate('click');
    expect(onClickMock).toBeCalled();
  });
});
