import React, { Component } from "react"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/index"
import NavigationBar from "./NavigationBar"
import AllQuotesContainer from "./AllQuotesContainer"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <AllQuotesContainer />
      </div>
    )
  }
}

export default connect()(App)
