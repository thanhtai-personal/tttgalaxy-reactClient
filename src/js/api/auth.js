
export const signUp = (data) => {
  return fetch("https://jsonplaceholder.typicode.com/signup", data)
}

export const login = (data) => {
  return fetch("https://jsonplaceholder.typicode.com/login", data)
}