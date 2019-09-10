import React, { Component } from "react"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/index"
import NavigationBar from "./NavigationBar"
import MainContainer from "./MainContainer"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <MainContainer />
      </div>
    )
  }
}

export default connect()(App)
