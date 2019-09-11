export const GET_QUOTES = "GET_QUOTES"
export const SET_SELECTED_QUOTE = "SET_SELECTED_QUOTE"

export function getQuotes(quotes) {
  return {
    type: GET_QUOTES,
    quotes
  }
}

export function setSelectedQuote(quoteId) {
  return {
    type: SET_SELECTED_QUOTE,
    quoteId
  }
}
