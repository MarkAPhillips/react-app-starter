import React from 'react';
import { componentSnapshotShouldMatch } from '../../testUtils';
import { Icon } from '../../../src/components/shared';

describe('Icon specs', () => {
  it('shoud render the component', () => {
    const component = <Icon iconClassName="fa fa-trash" />;
    componentSnapshotShouldMatch(component);
  });
});
