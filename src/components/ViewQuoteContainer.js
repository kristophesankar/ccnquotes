import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Title } from '../styles/styles'
import ViewQuote from './ViewQuote'

/* Container for view quote page */
const ViewQuoteContainer = props => {
  return (
    <Container id='viewQuoteContainer'>
      <Row>
        <Col sm={12}>
          <Title>Quote Actions</Title>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col sm={6}>
          <ViewQuote />
        </Col>
      </Row>
    </Container>
  )
}

export default ViewQuoteContainer
