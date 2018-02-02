import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import 'jest-styled-components';
import configureMockStore from 'redux-mock-store';
import { TodoContainer } from '../../../src/components/todos';
import { componentSnapshotShouldMatch } from '../../testUtils';

describe('TodoContainer specs', () => {
  const mockStore = configureMockStore();
  const initialState = {
    todos: {
      list: {},
    },
  };
  let component;
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    component = <Provider store={store}><TodoContainer /></Provider>;
    wrapper = mount(component);
  });

  it('should render the component ', () => {
    expect(wrapper.find(TodoContainer).length).toEqual(1);
  });

  it('should render the component snapshot correctly', () => {
    componentSnapshotShouldMatch(component);
  });
});
