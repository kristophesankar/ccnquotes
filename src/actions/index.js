import {
  getInitialData,
  createNewQuote,
  updateExistingQuote
} from "../utils/api"
import {
  getQuotes,
  getQuotesError,
  createQuote,
  updateQuote
} from "../actions/quotes"
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

export function handleUpdateQuote(quote) {
  return dispatch => {
    updateExistingQuote(quote).then(response => {
      dispatch(updateQuote(response))
    })
  }
}

export function handleSubmitQuote(data, history) {
  return dispatch => {
    return getInitialData()
      .then(quotes => {
        createNewQuote(data).then(response => {
          dispatch(createQuote(response))
          history.push(`/quote/${response.id}`)
        })
      })
      .catch(error => dispatch(getQuotesError(error)))
  }
}
