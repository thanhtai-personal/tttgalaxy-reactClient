import { takeEvery, call, put, post, get } from "redux-saga/effects";

export const signUp = (data) => {
  return post("https://jsonplaceholder.typicode.com/signup", data)
}

export const login = (data) => {
  return post("https://jsonplaceholder.typicode.com/login", data)
}