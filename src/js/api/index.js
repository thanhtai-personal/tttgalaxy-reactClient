import axios from 'axios'

import devConfig from './config/dev'
import prodConfig from './config/product'
let apiConfig = devConfig
if (process.env.NODE_ENV === "production") {
  apiConfig = prodConfig
}
let apiInstant = axios.create(apiConfig)

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

// apiInstant.setToken = (token) => {
//   apiConfig.headers['x-access-token'] = token
//   apiInstant = axios.create(apiConfig)
// }

export default apiInstant