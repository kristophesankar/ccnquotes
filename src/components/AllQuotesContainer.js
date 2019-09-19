import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuoteList from './QuoteList'
import QuoteCard from './QuoteCard'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Title } from '../styles/styles'

class AllQuotesContainer extends Component {
  state = {
    selection: ''
  }

  handleSelection = quoteId => {
    this.setState({ selection: quoteId })
  }

  render () {
    return (
      <Container id='allQuotesContainer'>
        <Row>
          <Col sm={12}>
            <Title>All Quotes</Title>
          </Col>
        </Row>
        <Row>
          <Col id='quoteListColumn' sm={6}>
            <QuoteList
              onHandleSelection={this.handleSelection}
              selection={this.state.selection}
              className='qL'
            />
          </Col>
          <Col id='quoteCardColumn' sm={6}>
            {this.state.selection === '' ? (
              <Card className='m-2 quoteListItem'>
                <Card.Body>Select a card to view its details...</Card.Body>
              </Card>
            ) : (
              <QuoteCard quoteId={this.state.selection} />
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps ({ selectedQuote }) {
  return {
    selectedQuote
  }
}

export default connect(mapStateToProps)(AllQuotesContainer)
