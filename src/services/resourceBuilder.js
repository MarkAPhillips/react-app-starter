import axiosInstance from './axiosInstance';
import build from './queryStringParameterBuilder';

const getApiParams = (params, headers) => ({
  queryStringParams: build(params),
  api: axiosInstance(headers),
});

export default getApiParams;
