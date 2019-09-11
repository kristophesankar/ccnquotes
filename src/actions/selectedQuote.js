export const SET_SELECTED_QUOTE = "SET_SELECTED_QUOTE"

export function setSelectedQuote(quoteId) {
  return {
    type: SET_SELECTED_QUOTE,
    quoteId
  }
}
