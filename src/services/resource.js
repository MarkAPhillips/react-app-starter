import getApiParams from './resourceBuilder';

const httpRequest = (method, resource, params, headers, data) => {
  const { api, queryStringParams } = getApiParams(params, headers);
  const resourcePath = `${resource}${queryStringParams}`;
  const args = [resourcePath];
  return api[method].call(null, ...(data == null ? args : [...args, data]));
};

/** GET items from a resource  */
export function get(resource, params, headers) {
  return httpRequest('get', resource, params, headers);
}

/** POST to a resource */
export function post(resource, data, params, headers) {
  return httpRequest('post', resource, params, headers, data);
}

/** PATCH a resource */
export function patch(resource, data, params, headers) {
  return httpRequest('patch', resource, params, headers, data);
}
