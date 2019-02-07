import React from 'react';
import _ from 'lodash';
import { componentSnapshotShouldMatch } from '../../testUtils';
import { TodoList } from '../../../src/components/todos';

describe('TodoList specs', () => {
  const todos = [{
    id: '71cda7b6-749b-47ec-937c-dca827dcd218',
    completed: false,
    item: 'Todo item',
  }];

  it('should render the component ', () => {
    const component = <TodoList todos={todos} onStatusChange={_.noop} />;
    componentSnapshotShouldMatch(component);
  });
});
