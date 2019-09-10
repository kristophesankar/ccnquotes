import { GET_QUOTES } from "../actions/quotes"

export default function quotes(state = {}, action) {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        ...action.quotes
      }
    default:
      return state
  }
}
