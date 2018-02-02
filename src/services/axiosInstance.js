import axios from 'axios';
import API from '../constants';

const defaultHeader = {
  'Content-Type': 'application/json;charset=UTF-8',
};

const validateStatus = status =>
  status >= API.STATUS_CODES.OK && status < API.STATUS_CODES.BAD_REQUEST;

const axiosInstance = (headers = defaultHeader) =>
  axios.create({
    baseURL: API.ROOT_URL,
    timeout: API.TIMEOUT_MS,
    headers,
    validateStatus,
  });

export default axiosInstance;
