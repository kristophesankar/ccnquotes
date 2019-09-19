import { combineReducers } from 'redux'
import quotes from '../reducers/quotes'
import selectedQuote from '../reducers/selectedQuote'

export default combineReducers({
  quotes,
  selectedQuote
})
