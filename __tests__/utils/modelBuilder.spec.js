import { todo } from '../../src/utils/modelBuilder';
import * as withId from '../../src/utils/withId';
import { setUpMockDate } from '../testUtils';

setUpMockDate();

describe('TodoModelBuilder specs', () => {
  beforeEach(() => {
    withId.withId = jest.fn();
  });
  it('should return the correct model for todo', () => {
    const item = 'Write a unit test';
    todo(item);
    expect(withId.withId).toHaveBeenCalledWith({
      item,
      completed: false,
      createdDate: '2018-01-01T00:00:00.000Z',
    });
  });
});
