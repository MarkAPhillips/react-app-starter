import toHash from '../../src/utils/toHash';

describe('ToHash specs', () => {
  it('should convert an array to a hash', () => {
    const data = [{ id: 1, value: 'Test' }];
    const result = toHash(data);
    const expected = { 1: { id: 1, value: 'Test' } };
    expect(result).toEqual(expected);
  });
});
