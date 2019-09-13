import React from "react"
import { connect } from "react-redux"
import QuoteList from "./QuoteList"
import QuoteCard from "./QuoteCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Title } from "../styles/styles"

const isEmpty = obj => {
  return Object.getOwnPropertyNames(obj).length === 0
}

const AllQuotesContainer = props => {
  return (
    <Container id="allQuotesContainer">
      <Row>
        <Col sm={12}>
          <Title>All Quotes</Title>
        </Col>
      </Row>
      <Row>
        <Col id="quoteListColumn" sm={6}>
          <QuoteList className="qL" />
        </Col>
        <Col id="quoteCardColumn" sm={6}>
          {isEmpty(props.selectedQuote) ? (
            <QuoteCard quoteId={1} />
          ) : (
            <QuoteCard quoteId={props.selectedQuote.id} />
          )}
        </Col>
      </Row>
    </Container>
  )
}

function mapStateToProps({ selectedQuote }) {
  return {
    selectedQuote
  }
}

export default connect(mapStateToProps)(AllQuotesContainer)
