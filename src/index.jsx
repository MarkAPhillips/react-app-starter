import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';
import { sagaInit } from './sagaInit';
import baseStyles from './assets/styles/';
import rootReducer from './reducers/';

/* load base styles */
baseStyles();

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const MOUNT_NODE = document.getElementById('root');

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
sagaInit(sagaMiddleware);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE,
);
