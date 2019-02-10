import { isObject, isPlainObject } from 'lodash';

const ERR_MESSAGE = 'Unable to build querystring invalid type passed';
const isValidParamValue = value => value != null && !isObject(value);

const throwException = (m) => {
  throw Error(m);
};

const buildQueryString = (key, params) => {
  const value = params[key];
  return isValidParamValue(value) ? `${key}=${encodeURIComponent(value)}` : throwException(ERR_MESSAGE);
};

/** Converts a list of object key values to a query string. */
export default function build(params) {
  if (params == null) return '';
  if (!isPlainObject(params)) throwException(ERR_MESSAGE);
  const queryString = Object.keys(params).map(key => buildQueryString(key, params)).join('&');
  return `?${queryString}`;
}
