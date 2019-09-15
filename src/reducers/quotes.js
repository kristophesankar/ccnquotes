import { GET_QUOTES, GET_QUOTES_ERROR, CREATE_QUOTE } from "../actions/quotes"

export default function quotes(state = {}, action) {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        ...action.quotes
      }
    case CREATE_QUOTE:
      const { quote } = action

      return {
        ...state,
        [Object.values(state).length]: quote
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
