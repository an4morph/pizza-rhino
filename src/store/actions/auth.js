import {
  GET_ME_SUCCESS,
  GET_ME_LOADING,
  GET_ME_FAILED,

  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILED,

  SIGNUP_SUCCESS,
  SIGNUP_LOADING,
  SIGNUP_FAILED,

  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_FAILED,
} from '../constants'
import { post, get } from '../api'
import apiErrorHandler from '../../services/apiErrorHandler'

export const loginAction = (data) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING })
  post('/login', { data })
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      dispatch({ type: LOGIN_SUCCESS, me: res.data.data })
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILED, error: apiErrorHandler(err) })
    })
}

export const signupAction = (data) => (dispatch) => {
  dispatch({ type: SIGNUP_LOADING })
  post('/signup', { data })
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      dispatch({ type: SIGNUP_SUCCESS, me: res.data.data })
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAILED, error: apiErrorHandler(err) })
    })
}

export const changePasswordAction = (data) => (dispatch) => {
  dispatch({ type: CHANGE_PASSWORD_LOADING })
  post('/change-password', { data, secure: true })
    .then(() => {
      dispatch({ type: CHANGE_PASSWORD_SUCCESS })
    })
    .catch((err) => {
      dispatch({ type: CHANGE_PASSWORD_FAILED, error: apiErrorHandler(err) })
    })
}

export const getMeAction = () => (dispatch) => {
  dispatch({ type: GET_ME_LOADING })
  get('/me', { secure: true })
    .then(({ data }) => {
      dispatch({ type: GET_ME_SUCCESS, me: data })
    })
    .catch((err) => {
      dispatch({ type: GET_ME_FAILED, error: apiErrorHandler(err) })
    })
}
