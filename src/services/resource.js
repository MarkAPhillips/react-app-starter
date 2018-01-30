import axios from 'axios';
import API from '../constants';
import build from './queryStringParameterBuilder';

function validateStatus(status) {
  return status >= API.STATUS_CODES.OK && status < API.STATUS_CODES.BAD_REQUEST;
}

const defaultHeader = {
  'Content-Type': 'application/json;charset=UTF-8',
};

function createInstance(headers = defaultHeader) {
  return axios.create({
    baseURL: API.ROOT_URL,
    timeout: API.TIMEOUT_MS,
    headers,
    validateStatus,
  });
}

/** GET method - returns a promise */
export function get(resource, params, headers) {
  const queryStringParams = build(params);
  return createInstance(headers).get(`${resource}${queryStringParams}`);
}

/** POST method returns a promise */
export function post(resource, data, params, headers) {
  const queryStringParams = build(params);
  return createInstance(headers).post(`${resource}${queryStringParams}`, data);
}
