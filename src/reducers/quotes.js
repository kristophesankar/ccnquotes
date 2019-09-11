import { GET_QUOTES, SET_SELECTED_QUOTE } from "../actions/quotes"

export default function quotes(state = {}, action) {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        ...action.quotes
      }
    case SET_SELECTED_QUOTE:
      return {
        ...state,
        selectedQuote: action.quoteId
      }
    default:
      return state
  }
}
