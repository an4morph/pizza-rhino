import {
  GET_CATALOG_SUCCESS,
  GET_CATALOG_LOADING,
  GET_CATALOG_FAILED,
} from '../constants'
import stateCreator from '../../services/stateCreator'

const initialState = {
  pizza: [],
  drinks: [],
  salads: [],
  getPizza: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  getDrinks: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  getSalads: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
}

const formatReqName = (req, name) => `${req.toLowerCase()}${name[0].toUpperCase()}${name.substr(1)}`

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATALOG_SUCCESS:
      return {
        ...state,
        [action.name]: action.data,
        [formatReqName('get', action.name)]: stateCreator('success'),
      }
    case GET_CATALOG_LOADING:
      return {
        ...state,
        [formatReqName('get', action.name)]: stateCreator('loading'),
      }
    case GET_CATALOG_FAILED:
      return {
        ...state,
        [formatReqName('get', action.name)]: stateCreator('failed', action.error),
      }
    default: return state
  }
}
