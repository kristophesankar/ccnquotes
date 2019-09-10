export const GET_QUOTES = "GET_QUOTES"

export function getQuotes(quotes) {
  return {
    type: GET_QUOTES,
    quotes
  }
}
