import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import baseStyles from './assets/styles/';
import { client } from './graphql/client';

/* load base styles */
baseStyles();

/* add font-awesome icons */
library.add(faTrashAlt);

const MOUNT_NODE = document.getElementById('root');

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  MOUNT_NODE,
);
