import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { getAll } from '../../../src/graphql/queries.graphql';
import { componentSnapshotShouldMatch } from '../../testUtils';
import { TodoList } from '../../../src/components/todos';

describe('TodoList specs', () => {
  const todos = [{
    id: '71cda7b6-749b-47ec-937c-dca827dcd218',
    completed: false,
    item: 'Todo item',
  }];

  const mocks = [
    {
      request: {
        query: getAll,
      },
      result: {
        data: {
          todos,
        },
      },
    },
  ];

  it('should render the component ', () => {
    const component =
      (
        <MockedProvider mocks={mocks} addTypename={false}>
          <TodoList />
        </MockedProvider>);

    componentSnapshotShouldMatch((component));
  });
});
