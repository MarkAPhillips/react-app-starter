import validate from '../../src/utils/todoValidate';

describe('TodoValidate specs', () => {
  let result;
  it('should return a valid error if text is null', () => {
    result = validate({ item: null });
    expect(result.item).toEqual('Required');
  });

  it('should return a valid error if text is empty', () => {
    result = validate({ item: '' });
    expect(result.item).toEqual('Required');
  });

  it('should return no errors if text is entered', () => {
    result = validate({ item: 'Write a unit test' });
    expect(result).toEqual({});
  });
});
