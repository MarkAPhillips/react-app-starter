import uuidv4 from 'uuid/v4';
import withId from '../../src/utils/withId';

jest.mock('uuid/v4');
uuidv4.mockImplementation(() => 1);

describe('WithId specs', () => {
  it('should add an Id to an object', () => {
    const obj = { value: 'Test' };
    const result = withId(obj);
    const expected = { id: 1, value: 'Test' };
    expect(result).toEqual(expected);
  });
});
