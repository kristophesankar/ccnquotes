import { getInitialData, createNewQuote } from "../utils/api"
import { getQuotes, getQuotesError, createQuote } from "../actions/quotes"
import { setSelectedQuote } from "../actions/selectedQuote"

export function handleInitialData() {
  return dispatch => {
    return getInitialData()
      .then(quotes => {
        dispatch(getQuotes(quotes))
      })
      .catch(error => dispatch(getQuotesError(error)))
  }
}

export function handleSetSelectedQuote(quoteId) {
  return dispatch => {
    dispatch(setSelectedQuote(quoteId))
  }
}

export function handleSubmitQuote(data) {
  return dispatch => {
    return getInitialData()
      .then(quotes => {
        createNewQuote(data).then(response => dispatch(createQuote(response)))
      })
      .catch(error => dispatch(getQuotesError(error)))
  }
}
