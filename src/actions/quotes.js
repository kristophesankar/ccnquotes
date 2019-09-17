export const GET_QUOTES = "GET_QUOTES"
export const GET_QUOTES_ERROR = "GET_QUOTES_ERROR"
export const CREATE_QUOTE = "CREATE_QUOTE"
export const UPDATE_QUOTE = "UPDATE_QUOTE"

export function getQuotes(quotes) {
  return {
    type: GET_QUOTES,
    quotes
  }
}

export function createQuote(quote) {
  return {
    type: CREATE_QUOTE,
    quote
  }
}

export function updateQuote(quote) {
  return {
    type: UPDATE_QUOTE,
    quote
  }
}

export function getQuotesError(quotesError) {
  return {
    type: GET_QUOTES_ERROR,
    quotesError
  }
}

