import React, { Component } from "react"
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { TruncatedText } from "../styles/styles"
import { handleSetSelectedQuote } from "../actions/index"
import { withRouter } from "react-router-dom"

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
    const { quotes, history } = this.props
    return (
      <div>
        {Object.values(quotes).length > 0 &&
        typeof quotes.quotesError === "undefined" ? (
          Object.values(quotes).map(quote => (
            <Card
              className="m-2 quoteListItem"
              key={`card-${quote.id}`}
              onClick={() => {
                this.handleSelection(quote.id)
              }}
            >
              <Card.Body className="p-2">
                <Row>
                  <Col sm={8}>
                    <TruncatedText>{quote.body}</TruncatedText>
                  </Col>
                  <Col
                    style={{ borderLeft: "#dfdfdf 1px solid" }}
                    className="text-center"
                    sm={4}
                  >
                    <Button
                      size="sm"
                      className="m-1 "
                      key={`edit-btn-${quote.id}`}
                      onClick={() => {
                        history.push(`/quote/${quote.id}`)
                      }}
                    >
                      Edit
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))
        ) : typeof quotes.quotesError !== "undefined" ? (
          <Card className="m-2 quoteListItem">
            <Card.Body>
              Oops! There seems to be a problem...
              {`${quotes.quotesError.message}.`}
            </Card.Body>
          </Card>
        ) : (
          <Card className="m-2 quoteListItem">
            <Card.Body> Sorry...We didn't find any quotes.</Card.Body>
          </Card>
        )}
      </div>
    )
  }
}

function mapStateToProps({ quotes }) {
  return {
    quotes
  }
}

export default connect(mapStateToProps)(withRouter(QuoteList))
