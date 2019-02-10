import { actionCreator } from '../../src/reducers/actionCreator';

describe('Action creator specs', () => {
  it('should return a function', () => {
    const result = actionCreator('LOAD');
    expect(typeof result).toBe('function');
  });

  it('should return the correct action type passed', () => {
    const result = actionCreator('LOAD')();
    expect(result).toEqual({ type: 'LOAD' });
  });

  it('should return the correct action type and payload passed', () => {
    const data = { name: 'Test User' };
    const result = actionCreator('LOAD', 'data')(data);
    expect(result).toEqual({ type: 'LOAD', data });
  });

  it('should throw an error if no action type is passed', () => {
    expect(() => actionCreator()).toThrow('Action type required');
  });
});
