import React, { Component } from "react"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/index"
import NavigationBar from "./NavigationBar"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <NavigationBar />
      </div>
      )
  }
}

export default connect()(App)
