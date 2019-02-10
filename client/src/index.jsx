import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import { sagaInit } from './sagaInit';
import baseStyles from './assets/styles/';
import rootReducer from './reducers/';


/* load base styles */
baseStyles();

/* add font-awesome icons */
library.add(faTrashAlt);

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
