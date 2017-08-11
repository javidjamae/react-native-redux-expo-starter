import { combineReducers } from 'redux'
import PlaceholderReducer from './PlaceholderReducer'

export default combineReducers( {
  placeholderState: PlaceholderReducer,
} )
