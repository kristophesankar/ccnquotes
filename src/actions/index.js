import { getInitialData } from "../utils/api"
import { getQuotes } from "../actions/quotes"
import { setSelectedQuote } from "../actions/selectedQuote"

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(quotes => {
      dispatch(getQuotes(quotes))
    })
  }
}

export function handleSetSelectedQuote(quoteId) {
  return dispatch => {
    dispatch(setSelectedQuote(quoteId))
  }
}
