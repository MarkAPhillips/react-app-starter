import { todo } from '../../src/utils/modelBuilder';
import * as withId from '../../src/utils/withId';

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
    });
  });
});
