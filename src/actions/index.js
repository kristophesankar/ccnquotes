import {
  getInitialData,
  getSearchData,
  createNewQuote,
  updateExistingQuote,
  deleteExistingQuote
} from '../utils/api'
import {
  getQuotes,
  getQuotesError,
  getSearchQuotes,
  createQuote,
  updateQuote,
  deleteQuote
} from '../actions/quotes'

export function handleInitialData () {
  return dispatch => {
    return getInitialData()
      .then(quotes => {
        dispatch(getQuotes(quotes))
      })
      .catch(error => dispatch(getQuotesError(error)))
  }
}

export function handleSearchData (query) {
  return dispatch => {
    return getSearchData(query)
      .then(response => {
        dispatch(getSearchQuotes(response))
      })
      .catch(error => dispatch(getQuotesError(error)))
  }
}

export function handleUpdateQuote (quote) {
  return dispatch => {
    updateExistingQuote(quote)
      .then(response => {
        dispatch(updateQuote(response))
      })
      .catch(error => dispatch(getQuotesError(error)))
  }
}

export function handleDeleteQuote (quote) {
  return dispatch => {
    deleteExistingQuote(quote)
      .then(response => {
        console.log(response)
        dispatch(deleteQuote(quote))
      })
      .catch(error => dispatch(getQuotesError(error)))
  }
}

export function handleSubmitQuote (data, history) {
  return dispatch => {
    return getInitialData()
      .then(quotes => {
        createNewQuote(data).then(response => {
          dispatch(createQuote(response))
          history.push(`/`)
        })
      })
      .catch(error => dispatch(getQuotesError(error)))
  }
}
