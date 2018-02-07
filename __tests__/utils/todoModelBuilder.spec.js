import build from '../../src/utils/todoModelBuilder';
import * as withId from '../../src/utils/withId';

describe('TodoModelBuilder specs', () => {
  it('should return the correct model', () => {
    withId.withId = jest.fn();
    const item = 'Write a unit test';
    build(item);
    expect(withId.withId).toHaveBeenCalledWith({
      item,
      completed: false,
    });
  });
});
