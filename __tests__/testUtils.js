import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

export const componentSnapshotShouldMatch = (component) => {
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
};

export const setUpMockDate = () => {
  const mockDate = { year: 2018, month: 0, day: 1 };
  Date.now = jest.fn(() =>
    new Date(Date.UTC(mockDate.year, mockDate.month, mockDate.day)).valueOf());
};

const mockStore = configureMockStore();
const store = mockStore({});

export const MockConnectedComponent = component => (
  <Provider store={store}>
    {component}
  </Provider>);
