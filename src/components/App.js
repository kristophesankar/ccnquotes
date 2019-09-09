import React, { Component } from "react"
import { getInitialData } from "../utils/api"

class CCNQuotes extends Component {
  componentDidMount() {
    getInitialData().then(data => console.log(data))
  }

  render() {
    return <h1>CCN Quotes</h1>
  }
}

export default CCNQuotes
