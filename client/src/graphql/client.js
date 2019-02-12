import ApolloClient from 'apollo-boost';
import { API } from '../constants';

export const client = new ApolloClient({
  uri: API.ROOT_URL,
});
