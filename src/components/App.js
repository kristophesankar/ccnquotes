import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/index'
import NavigationBar from './NavigationBar'
import AllQuotesContainer from './AllQuotesContainer'
import CreateQuoteContainer from './CreateQuoteContainer'
import ViewQuoteContainer from './ViewQuoteContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <>
            <Route path='/' exact component={AllQuotesContainer} />
            <Route path='/create' exact component={CreateQuoteContainer} />
            <Route path='/quote/:id' exact component={ViewQuoteContainer} />
          </>
        </Switch>
      </Router>
    )
  }
}

export default connect()(App)
