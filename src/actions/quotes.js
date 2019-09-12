export const GET_QUOTES = "GET_QUOTES"
export const GET_QUOTES_ERROR = "GET_QUOTES_ERROR"

export function getQuotes(quotes) {
  return {
    type: GET_QUOTES,
    quotes
  }
}

export function getQuotesError(quotesError) {
  return {
    type: GET_QUOTES_ERROR,
    quotesError
  }
}

