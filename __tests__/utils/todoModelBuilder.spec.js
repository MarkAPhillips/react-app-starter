import uuidv4 from 'uuid/v4';
import build from '../../src/utils/todoModelBuilder';

jest.mock('uuid/v4');
uuidv4.mockImplementation(() => 1);

describe('TodoModelBuilder specs', () => {
  it('should return the correct model', () => {
    const item = 'Write a unit test';
    const model = build(item);
    const expected = { id: 1, item, completed: false };
    expect(model).toEqual(expected);
  });
});
