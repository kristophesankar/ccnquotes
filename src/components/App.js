import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/index'
import NavigationBar from './NavigationBar'
import AllQuotesContainer from './AllQuotesContainer'
import CreateQuoteContainer from './CreateQuoteContainer'
import Footer from './Footer'
import ViewQuoteContainer from './ViewQuoteContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  /* Load in all data from API on start */
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleInitialData())
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
        <Footer />
      </Router>
    )
  }
}

export default connect()(App)
