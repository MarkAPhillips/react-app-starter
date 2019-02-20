import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { API } from '../constants';

const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
});

export const client = new ApolloClient({
  uri: API.ROOT_URL,
  cache,
});
