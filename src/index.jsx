import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './common/components/';
import baseStyles from './common/styles/';
import rootReducer from './common/redux/';

/* load base styles */
baseStyles();

const middleware = [thunk];
const MOUNT_NODE = document.getElementById('root');

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
/* eslint-enable */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE,
);
