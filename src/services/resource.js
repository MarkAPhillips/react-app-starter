import getApiParams from './resourceBuilder';

/** GET method - returns a promise */
export function get(resource, params, headers) {
  const { api, queryStringParams } = getApiParams(params, headers);
  return api.get(`${resource}${queryStringParams}`);
}

/** POST method returns a promise */
export function post(resource, data, params, headers) {
  const { api, queryStringParams } = getApiParams(params, headers);
  return api.post(`${resource}${queryStringParams}`, data);
}
