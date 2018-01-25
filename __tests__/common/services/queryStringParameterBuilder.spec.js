import build from '../../../src/common/services/queryStringParameterBuilder';

const noop = () => {};

describe('QuerystringparameterBuilder specs', () => {
  let result;

  it('should return an empty string if no params are passed', () => {
    result = build();
    expect(result).toBe('');
  });

  it('should return the correct querystring when valid params are passed', () => {
    const params = { id: 1, url: 'http://localhost', isActive: true };
    result = build(params);
    expect(result).toBe('?id=1&url=http%3A%2F%2Flocalhost&isActive=true');
  });

  it('should throw an exception for invalid types passed', () => {
    const invalidTypes = [{ id: 1, url: {} }, { id() {} }, { id: null }, [], noop];
    invalidTypes.forEach((params) => {
      expect(() => build(params)).toThrow('Unable to build querystring invalid type passed');
    });
  });
});
