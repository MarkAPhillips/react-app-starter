import getApiParams from './resourceBuilder';

const httpRequest = (method, resource, params, headers, data) => {
  const { api, queryStringParams } = getApiParams(params, headers);
  const resourcePath = `${resource}${queryStringParams}`;
  const args = [resourcePath];
  return api[method].call(null, ...(data == null ? args : [...args, data]));
};

export const get = (resource, params, headers) => httpRequest('get', resource, params, headers);

export const post = (resource, data, params, headers) => httpRequest('post', resource, params, headers, data);

export const patch = (resource, data, params, headers) => httpRequest('patch', resource, params, headers, data);

export const deleteItem = (resource, params, headers) => httpRequest('delete', resource, params, headers);
