import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Title } from '../styles/styles'
import CreateQuoteForm from './CreateQuoteForm'

/*
 * This is a container for the create quote form.
 * Contains basic layout of the page
 */
const CreateQuoteContainer = props => {
  return (
    <Container id='createQuoteContainer'>
      <Row>
        <Col sm={12}>
          <Title>Create Quote</Title>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col sm={6}>
          <CreateQuoteForm />
        </Col>
      </Row>
    </Container>
  )
}

export default CreateQuoteContainer
