import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILED,
} from '../constants'
import stateCreator from '../../services/stateCreator'

const initialState = {
  me: null,
  login: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        me: action.me,
        login: stateCreator('success'),
      }
    case LOGIN_LOADING:
      return {
        ...state,
        login: stateCreator('loading'),
      }
    case LOGIN_FAILED:
      return {
        ...state,
        login: stateCreator('failed', action.error),
      }
    default: return state
  }
}
