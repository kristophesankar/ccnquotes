import React, { Component } from "react"
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"

class QuoteCard extends Component {
  state = {
    quote: {}
  }

  componentDidMount() {}

  render() {
    return (
      <Card className="m-2">
        <Card.Body className="p-2">
          {this.props.quote.map(entry => (
            <div key={`quote-${entry.id}`}>
              <div>{entry.body}</div>
              <br />
              <div>{entry.author}</div>
              <br />
              <div>{entry.source}</div>
            </div>
          ))}
        </Card.Body>
      </Card>
    )
  }
}

function mapStateToProps({ quotes }, props) {
  const quote = Object.values(quotes).filter(entry => {
    return parseInt(entry.id) === parseInt(props.quoteId)
  })
  return {
    quote
  }
}

export default connect(mapStateToProps)(QuoteCard)
