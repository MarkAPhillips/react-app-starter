import getApiParams from '../../src/services/resourceBuilder';
import { get, post, put } from '../../src/services/resource';

const returnValue = { api: { get: jest.fn(), post: jest.fn(), put: jest.fn() }, queryStringParams: '?key=12345' };

jest.mock('../../src/services/resourceBuilder');
getApiParams.mockImplementation(() => returnValue);

describe('Resource specs', () => {
  it('should verify get is called with the correct arguments', () => {
    get('todos', { key: 12345 });
    expect(returnValue.api.get).toHaveBeenCalledWith('todos?key=12345');
  });

  it('should verify post is called with the correct arguments', () => {
    const data = { id: 1, completed: false, item: 'Write a unit test' };
    post('todos', data, { key: 12345 });
    expect(returnValue.api.post).toHaveBeenCalledWith('todos?key=12345', data);
  });

  it('should verify put is called with the correct arguments', () => {
    const data = { id: 1, completed: false, item: 'Write a unit test' };
    put('todos', data, { key: 12345 });
    expect(returnValue.api.put).toHaveBeenCalledWith('todos?key=12345', data);
  });
});
