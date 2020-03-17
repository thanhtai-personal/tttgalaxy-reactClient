
const login = (apiInstant) => apiInstant.post('auth/login', { email: dataLogin.email, password: dataLogin.password })

export default {
  login: login
}