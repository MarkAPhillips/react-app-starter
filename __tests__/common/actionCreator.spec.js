import { actionCreator } from '../../src/common/actionCreator';

describe('Action creator specs', () => {
  it('returns a function', () => {
    const result = actionCreator();
    expect(typeof result).toBe('function');
  });

  it('returns the correct type called', () => {
    const result = actionCreator('LOAD')();
    expect(result).toEqual({ type: 'LOAD' });
  });

  it('returns the correct type and action when called', () => {
    const data = { name: 'Test User' };
    const result = actionCreator('LOAD', 'data')(data);
    expect(result).toEqual({ type: 'LOAD', data });
  });
});
