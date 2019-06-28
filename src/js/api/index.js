import axios from 'axios'

import createAuthApi from './auth.js'
import devConfig from './config/dev'

const apiInstant = axios.create(devConfig)

const authApi = createAuthApi(apiInstant)

const ApiService = {
  ...authApi,
}

export default ApiService