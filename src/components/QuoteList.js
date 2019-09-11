import React from "react"
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"
import { TruncatedText } from "../styles/styles"

const QuoteList = props => {
  const { quotes } = props
  return (
    <div>
      {Object.values(quotes).map(quote => (
        <Card className="m-2" key={quote.id}>
          <Card.Body className="p-2">
            <TruncatedText>{quote.body}</TruncatedText>
            <Card.Link href="#">Preview</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

function mapStateToProps({ quotes }) {
  return {
    quotes
  }
}

export default connect(mapStateToProps)(QuoteList)
