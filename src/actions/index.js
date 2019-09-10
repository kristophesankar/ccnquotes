import { getInitialData } from "../utils/api"
import { getQuotes } from "../actions/quotes"

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(quotes => {
      dispatch(getQuotes(quotes))
    })
  }
}
