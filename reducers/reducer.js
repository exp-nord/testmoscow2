import { KEY_FILTER } from '../constants/ActionTypes'

export default function reducer(state = 'start', action) {

  switch (action.type) {
    case KEY_FILTER:
      return action.text;

    default:
      return state
  }
}
