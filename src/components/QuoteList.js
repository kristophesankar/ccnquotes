import React from "react"
import { connect } from "react-redux"

const QuoteList = (props) => {
  const { quotes } = props
  return (
    <div>
      { Object.values(quotes).map( (quote) => (
          <div key={quote.id}>{quote.body}</div>
        ))
      }
    </div>
  )
}

function mapStateToProps ({quotes}) {
  return {
    quotes
  }
}

export default connect(mapStateToProps)(QuoteList)
