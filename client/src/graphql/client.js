import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { API } from '../constants';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri: API.ROOT_URL,
  cache,
});
