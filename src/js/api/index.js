import axios from 'axios'

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

export default apiInstant