import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILED,
} from '../constants'
import { post } from '../api'
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
