import axios from 'axios'

import devConfig from './config/dev'
import prodConfig from './config/product'

const apiInstant = axios.create(devConfig)

if (process.env.NODE_ENV == 'production') {
  apiInstant = axios.create(prodConfig)
}

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