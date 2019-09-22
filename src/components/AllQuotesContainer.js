import React, { Component } from 'react'
import QuoteList from './QuoteList'
import QuoteCard from './QuoteCard'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Title, QuoteListContainer } from '../styles/styles'
import { Scrollbars } from 'react-custom-scrollbars'

class AllQuotesContainer extends Component {
  state = {
    selection: ''
  }

  /* On QuoteList item click set the selection property in state */
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
            <Scrollbars
              autoHide autoHideTimeout={1000}
              autoHideDuration={200} style={{ width: '100%', height: '80vh' }}
            >
              <QuoteListContainer>
                {/*
                  * Pass in the handleSelection function to the QuoteList component
                  */}
                <QuoteList
                  onHandleSelection={this.handleSelection}
                  className='qL'
                />
              </QuoteListContainer>
            </Scrollbars>
          </Col>
          <Col id='quoteCardColumn' sm={6}>
            {/* Condition for showing selected card details */}
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

export default AllQuotesContainer
