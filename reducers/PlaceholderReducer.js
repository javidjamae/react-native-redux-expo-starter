import {
  PLACEHOLDER_TYPE
} from '../actions/types'

const INITIAL_STATE = {
  value: null,
}

export default function( state = INITIAL_STATE, action ) {
  switch ( action.type ) {
    case PLACEHOLDER_TYPE:
      return { ...state, value: action.payload.value }

    default:
      return state
  }
}
