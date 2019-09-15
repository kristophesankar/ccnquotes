import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Title } from "../styles/styles"

const CreateQuoteContainer = props => {
  return (
    <Container id="createQuoteContainer">
      <Row>
        <Col sm={12}>
          <Title>Create Quote</Title>
        </Col>
      </Row>
      <Row>
        <Col sm={12}></Col>
      </Row>
    </Container>
  )
}

export default CreateQuoteContainer
