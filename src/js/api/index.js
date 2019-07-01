import axios from 'axios'

import createAuthApi from './auth.js'
import devConfig from './config/dev'

const apiInstant = axios.create(devConfig)

apiInstant.interceptors.request.use((config) => {
  return config;
}, (err) => {
  return Promise.reject(err);
});

apiInstant.interceptors.response.use((response) => {
  return response;
}, (err) => {
  return Promise.reject(err);
});

const authApi = createAuthApi(apiInstant)

const ApiService = {
  ...authApi,
}

export default ApiService