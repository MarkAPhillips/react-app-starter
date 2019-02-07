import React from 'react';
import _ from 'lodash';
import { componentSnapshotShouldMatch } from '../../testUtils';
import { CheckBox } from '../../../src/components/shared';

describe('CheckBox specs', () => {
  it('shoud render the component', () => {
    const component = (<CheckBox
      item="Todo item"
      completed={false}
      id="71cda7b6-749b-47ec-937c-dca827dcd218"
      onChange={_.noop}
    />);
    componentSnapshotShouldMatch(component);
  });
});
