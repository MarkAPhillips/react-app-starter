import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('Application renders', () => {
  it('should render the component ', () => {
    const component = shallow(<App />);
    expect(component.exists()).toEqual(true);
  });
});
