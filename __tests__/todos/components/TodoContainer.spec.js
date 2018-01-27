import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { TodoContainer } from '../../../src/todos/components/';

describe('TodoContainer specs', () => {
  const mockStore = configureMockStore();
  const initialState = {};
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><TodoContainer /></Provider>);
  });

  it('should render the component ', () => {
    expect(wrapper.find(TodoContainer).length).toEqual(1);
  });
});
