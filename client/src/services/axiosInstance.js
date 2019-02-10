import axios from 'axios';
import memoize from 'lodash/memoize';
import { API } from '../constants';

const defaultHeader = {
  'Content-Type': 'application/json;charset=UTF-8',
};

const validateStatus = status =>
  status >= API.STATUS_CODES.OK && status < API.STATUS_CODES.BAD_REQUEST;

const create = (headers = defaultHeader) => {
  const instance = axios.create({
    baseURL: API.ROOT_URL,
    timeout: API.TIMEOUT_MS,
    headers,
    validateStatus,
  });

  // instance.interceptors.request.use(config =>
  //   Object.assign({}, config, { params: { key: 1 } }), err => Promise.reject(err));
  return instance;
};

const axiosInstance = memoize(create);

export default axiosInstance;
