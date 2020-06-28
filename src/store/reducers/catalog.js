import {
  GET_PIZZA_SUCCESS,
  GET_PIZZA_LOADING,
  GET_PIZZA_FAILED,

  GET_DRINKS_SUCCESS,
  GET_DRINKS_LOADING,
  GET_DRINKS_FAILED,

  GET_SALADS_SUCCESS,
  GET_SALADS_LOADING,
  GET_SALADS_FAILED,
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

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PIZZA_SUCCESS:
      return {
        ...state,
        pizza: action.data,
        getPizza: stateCreator('success'),
      }
    case GET_PIZZA_LOADING:
      return {
        ...state,
        getPizza: stateCreator('loading'),
      }
    case GET_PIZZA_FAILED:
      return {
        ...state,
        getPizza: stateCreator('failed', action.error),
      }
    case GET_DRINKS_SUCCESS:
      return {
        ...state,
        drinks: action.data,
        getDrinks: stateCreator('success'),
      }
    case GET_DRINKS_LOADING:
      return {
        ...state,
        getDrinks: stateCreator('loading'),
      }
    case GET_DRINKS_FAILED:
      return {
        ...state,
        getDrinks: stateCreator('failed', action.error),
      }
    case GET_SALADS_SUCCESS:
      return {
        ...state,
        salads: action.data,
        getSalads: stateCreator('success'),
      }
    case GET_SALADS_LOADING:
      return {
        ...state,
        getSalads: stateCreator('loading'),
      }
    case GET_SALADS_FAILED:
      return {
        ...state,
        getSalads: stateCreator('failed', action.error),
      }
    default: return state
  }
}
