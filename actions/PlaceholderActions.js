import {
  PLACEHOLDER_TYPE,
} from './types'

export const createPlaceholderSynchronousAction = ( value ) => {
  console.log('action fired', value)
  return { type: PLACEHOLDER_TYPE, payload: { value } }
}

export const createPlaceholderAsynchronousAction = ( value ) => async dispatch => {
  dispatch( { type: PLACEHOLDER_TYPE, payload: { value } } )
}
