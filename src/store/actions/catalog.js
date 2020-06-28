import {
  GET_PIZZA_SUCCESS,
  GET_PIZZA_LOADING,
  GET_PIZZA_FAILED,

  GET_SALADS_SUCCESS,
  GET_SALADS_LOADING,
  GET_SALADS_FAILED,

  GET_DRINKS_SUCCESS,
  GET_DRINKS_LOADING,
  GET_DRINKS_FAILED,
} from '../constants'
import { get } from '../api'
import apiErrorHandler from '../../services/apiErrorHandler'

export const getPizzaAction = () => (dispatch) => {
  dispatch({ type: GET_PIZZA_LOADING })
  get('/pizza')
    .then((res) => {
      dispatch({ type: GET_PIZZA_SUCCESS, data: res.data })
    })
    .catch((err) => {
      dispatch({ type: GET_PIZZA_FAILED, error: apiErrorHandler(err) })
    })
}

export const getDrinksAction = () => (dispatch) => {
  dispatch({ type: GET_DRINKS_LOADING })
  get('/drinks')
    .then((res) => {
      dispatch({ type: GET_DRINKS_SUCCESS, data: res.data })
    })
    .catch((err) => {
      dispatch({ type: GET_DRINKS_FAILED, error: apiErrorHandler(err) })
    })
}

export const getSaladsAction = () => (dispatch) => {
  dispatch({ type: GET_SALADS_LOADING })
  get('/salads')
    .then((res) => {
      dispatch({ type: GET_SALADS_SUCCESS, data: res.data })
    })
    .catch((err) => {
      dispatch({ type: GET_SALADS_FAILED, error: apiErrorHandler(err) })
    })
}
