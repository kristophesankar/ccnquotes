import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { TruncatedText, CustomCard, NavIcon } from '../styles/styles'
import { withRouter } from 'react-router-dom'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tippy'

class QuoteList extends Component {
  state= {
    selectedCard: ''
  }

  render () {
    const { quotes, history, onHandleSelection } = this.props
    const { selectedCard } = this.state
    return (
      <div id='quoteList'>
        {/* Show cards if there are items in the db and there were no
        * errors in querying. Else show a placeholder.
        */}
        {Object.values(quotes).length > 0 &&
        typeof quotes.quotesError === 'undefined' ? (
            Object.values(quotes).map(quote => (
              <CustomCard
                className='m-2 quoteListItem'
                key={`card-${quote.id}`}
                style={(`card-${quote.id}` === selectedCard)
                  ? { background: '#d1e8fa' }
                  : { background: 'inherit' }}
                onClick={() => {
                  this.setState({ selectedCard: `card-${quote.id}` })
                  onHandleSelection(quote.id)
                }}
              >
                <Card.Body className='p-2'>
                  <Row>
                    <Col sm={8}>
                      <TruncatedText>{quote.body}</TruncatedText>
                    </Col>
                    <Col
                      className='text-right'
                      sm={4}
                    >
                      <Tooltip
                        title='Update this quote'
                        position='left'
                        trigger='mouseenter'
                        animation='shift'
                      >
                        <NavIcon
                          icon={faEdit}
                          className='navIcon'
                          key={`edit-btn-${quote.id}`}
                          onClick={() => {
                            history.push(`/quote/${quote.id}`)
                          }}
                        />
                      </Tooltip>
                    </Col>
                  </Row>
                </Card.Body>
              </CustomCard>
            ))
          ) : typeof quotes.quotesError !== 'undefined' ? (
            <CustomCard className='m-2 quoteListItem'>
              <Card.Body>
              Oops! There seems to be a problem...
                {`${quotes.quotesError.message}.`}
              </Card.Body>
            </CustomCard>
          ) : (
            <CustomCard className='m-2 quoteListItem'>
              <Card.Body> Sorry...We didn't find any quotes.</Card.Body>
            </CustomCard>
          )}
      </div>
    )
  }
}

function mapStateToProps ({ quotes }) {
  return {
    quotes
  }
}

export default connect(mapStateToProps)(withRouter(QuoteList))
