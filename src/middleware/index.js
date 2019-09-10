import thunk from "redux-thunk"
import logger from "../middleware/logger"
import { applyMiddleware } from "redux"

export default applyMiddleware(thunk, logger)
