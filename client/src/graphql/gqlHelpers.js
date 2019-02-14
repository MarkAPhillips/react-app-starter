import gql from 'graphql-tag';
import { print } from 'graphql/language/printer';

export const convertQueryToString = query => gql`${print(query)}`;
