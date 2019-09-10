import React, { Component } from "react"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/index"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return <h1>CCN Quotes</h1>
  }
}

export default connect()(App)
