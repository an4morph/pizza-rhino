import {
  GET_CATALOG_SUCCESS,
  GET_CATALOG_LOADING,
  GET_CATALOG_FAILED,
} from '../constants'
import { get } from '../api'
import apiErrorHandler from '../../services/apiErrorHandler'

export const getCatalog = (_name) => (dispatch) => {
  const name = _name.toLowerCase()
  dispatch({ type: GET_CATALOG_LOADING, name })
  get(`/${name}`)
    .then((res) => {
      dispatch({ type: GET_CATALOG_SUCCESS, data: res.data, name })
    })
    .catch((err) => {
      dispatch({ type: GET_CATALOG_FAILED, error: apiErrorHandler(err), name })
    })
}
