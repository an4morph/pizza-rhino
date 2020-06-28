import { combineReducers } from 'redux'
import auth from './auth'
import catalog from './catalog'

export default combineReducers({
  auth, catalog,
})
