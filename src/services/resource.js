import axios from 'axios';
import AppConstants from '../app.constants';

function validateStatus(status) {
  return status >= AppConstants.API.STATUS_CODES.OK
    && status < AppConstants.API.STATUS_CODES.INTERNAL_SERVER_ERROR;
}

const defaultHeader = {
  'Content-Type': 'application/json;charset=UTF-8',
};

function createInstance(headers = defaultHeader) {
  return axios.create({
    baseURL: AppConstants.API.ROOT_URL,
    timeout: AppConstants.API.TIMEOUT_MS,
    headers,
    validateStatus,
  });
}

function buildQueryStringParams(params) {
  if (params == null) return null;
  const queryString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
  return `?${queryString}`;
}

/** GET method - returns a promise */
export function get(resource, params, headers) {
  const queryStringParams = buildQueryStringParams(params);
  return createInstance(headers).get(`${resource}${queryStringParams}`);
}

/** POST method returns a promise */
export function post(resource, data, params, headers) {
  const queryStringParams = buildQueryStringParams(params);
  return createInstance(headers).post(`${resource}${queryStringParams}`, data);
}
