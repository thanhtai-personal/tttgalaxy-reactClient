import axios from 'axios'
import devConfig from './config/dev'
import prodConfig from './config/product'
import loginApis from './login.apis'

let apiConfig = devConfig
if (process.env.NODE_ENV && typeof process.env.NODE_ENV.toLowerCase === 'function' && process.env.NODE_ENV.toLowerCase() === 'production') {
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

const compileAPI  = (apisObject) => {
  let returnApiObj = {}
  if(apisObject && typeof apisObject === 'object') {
    apisObject.forEach((key) => {
      returnApiObj[key] = apisObject[key] && typeof apisObject[key] === 'function' ? apisObject[key](apiInstant) : new Promise()
    });
  }
}

export default {
  login: compileAPI(loginApis)
}