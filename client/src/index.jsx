import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import { GlobalStyle } from './assets/styles/';
import { client } from './graphql/client';

/* add font-awesome icons */
library.add(faTrashAlt);

const MOUNT_NODE = document.getElementById('root');

render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  MOUNT_NODE,
);
