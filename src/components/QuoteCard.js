import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

const QuoteCard = props => {
  return (
    <Card id='quoteCard' className='m-2'>
      <Card.Body className='p-2'>
        {props.quote.map(entry => (
          <div key={`quote-${entry.id}`}>
            <div id='entryBody'>{entry.body}</div>
            <br />
            <div id='entryAuthor'>{entry.author}</div>
            <br />
            <div id='entrySource'>{entry.source}</div>
          </div>
        ))}
      </Card.Body>
    </Card>
  )
}

function mapStateToProps ({ quotes }, props) {
  const quote = Object.values(quotes).filter(entry => {
    return parseInt(entry.id) === parseInt(props.quoteId)
  })
  return {
    quote
  }
}

export default connect(mapStateToProps)(QuoteCard)
