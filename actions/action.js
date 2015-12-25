import * as types from '../constants/ActionTypes'

export function keyFilter(text) {
  return { type: types.KEY_FILTER, text }
}
