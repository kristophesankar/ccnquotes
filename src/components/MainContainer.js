import React from "react"
import QuoteList from "./QuoteList"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Title } from "../styles/styles"

const MainContainer = props => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Title>All Quotes</Title>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <QuoteList />
        </Col>
        <Col sm={6}>Card Goes here</Col>
      </Row>
    </Container>
  )
}

export default MainContainer
