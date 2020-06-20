import {
  GET_DATA,
} from '../constants'

const initialState = {
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: [1, 2, 3],
      }
    default:
      return state
  }
}
