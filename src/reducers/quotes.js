import { GET_QUOTES, GET_QUOTES_ERROR } from "../actions/quotes"

export default function quotes(state = {}, action) {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        ...action.quotes
      }
    case GET_QUOTES_ERROR:
      return {
        ...state,
        quotesError: action.quotesError
      }
    default:
      return state
  }
}
