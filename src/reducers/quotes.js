import {
  GET_QUOTES,
  GET_QUOTES_ERROR,
  CREATE_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE
} from "../actions/quotes"

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
    case UPDATE_QUOTE:
      const key = Object.entries(state).filter(entry => {
        return entry[1].id === action.quote.id
      })
      return {
        ...state,
        [key[0][0]]: action.quote
      }
    case DELETE_QUOTE:
      const entries = Object.entries(state).filter(entry => {
        return entry[1].id !== action.quote.id
      })
      const newState = Object.fromEntries(entries)

      return {
        ...newState
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
