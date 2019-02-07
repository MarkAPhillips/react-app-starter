import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../../../src/components/shared';

describe('Icon specs', () => {
  it('shoud render the component', () => {
    const wrapper = shallow(<Icon iconClassName="fa fa-trash" />);
    expect(wrapper.exists()).toEqual(true);
  });
});
