import React, { Component } from "react"
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"
import { TruncatedText } from "../styles/styles"
import { handleSetSelectedQuote } from "../actions/index"

class QuoteList extends Component {
  state = {
    quoteId: ""
  }

  handleSelection = quoteId => {
    const { dispatch } = this.props
    this.setState({ quoteId })
    dispatch(handleSetSelectedQuote(quoteId))
  }

  render() {
    const { quotes } = this.props
    return (
      <div>
        {Object.values(quotes).map(quote => (
          <Card className="m-2" key={`card-${quote.id}`}>
            <Card.Body className="p-2">
              <TruncatedText>{quote.body}</TruncatedText>
              <button
                key={`btn-${quote.id}`}
                onClick={() => {
                  this.handleSelection(quote.id)
                }}
              >
                Preview
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ quotes }) {
  return {
    quotes
  }
}

export default connect(mapStateToProps)(QuoteList)
