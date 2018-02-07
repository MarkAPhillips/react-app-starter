import { todo } from '../../src/utils/modelBuilder';
import * as withId from '../../src/utils/withId';

describe('TodoModelBuilder specs', () => {
  it('should return the correct model', () => {
    withId.withId = jest.fn();
    const item = 'Write a unit test';
    todo(item);
    expect(withId.withId).toHaveBeenCalledWith({
      item,
      completed: false,
    });
  });
});
