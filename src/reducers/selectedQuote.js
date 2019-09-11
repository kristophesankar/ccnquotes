import { SET_SELECTED_QUOTE } from "../actions/selectedQuote"

export default function quotes(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_QUOTE:
      return {
        ...state,
        id: action.quoteId
      }
    default:
      return state
  }
}
