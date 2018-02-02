import axiosInstance from './axiosInstance';
import build from './queryStringParameterBuilder';

/** GET method - returns a promise */
export function get(resource, params, headers) {
  const queryStringParams = build(params);
  return axiosInstance(headers).get(`${resource}${queryStringParams}`);
}

/** POST method returns a promise */
export function post(resource, data, params, headers) {
  const queryStringParams = build(params);
  return axiosInstance(headers).post(`${resource}${queryStringParams}`, data);
}
