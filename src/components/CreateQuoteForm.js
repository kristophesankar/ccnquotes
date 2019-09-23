import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { handleSubmitQuote } from '../actions/index'
import { withRouter } from 'react-router-dom'
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css'
import { Tooltip } from 'react-tippy'
import { NavActionIcon, ActionButton } from '../styles/styles'
import { faSave, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class CreateQuoteForm extends Component {
  state = {
    body: '',
    author: '',
    source: '',
    bodyError: 'You did not enter any quote in.',
    authorError: 'You did not enter any author in.',
    sourceError: 'You did not enter any source in.'
  }

  /* Update state on input change */

  handleOnChangeBody = event => {
    this.setState({
      body: event.target.value
    })
  }

  handleOnChangeAuthor = event => {
    this.setState({
      author: event.target.value
    })
  }

  handleOnChangeSource = event => {
    this.setState({
      source: event.target.value
    })
  }

  /* handle event for back button */
  handleOnBack = event => {
    event.preventDefault()
    const { history } = this.props
    history.goBack()
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { history } = this.props
    const {
      body,
      author,
      source,
      bodyError,
      authorError,
      sourceError
    } = this.state
    let error = false

    /*
    * Show errors
    * TODO: Refactor
    */
    if (body === '') {
      toast.notify(bodyError, {
        position: 'top-right'
      })
      error = true
    }

    if (author === '') {
      toast.notify(authorError, {
        position: 'top-right'
      })
      error = true
    }

    if (source === '') {
      toast.notify(sourceError, {
        position: 'top-right'
      })
      error = true
    }

    /* Condition for dispatching quote submission */
    if (!error) {
      this.props.dispatch(handleSubmitQuote({ body, author, source }, history))
      toast.notify('Quote saved!', {
        position: 'top-right'
      })
    }
  }

  render () {
    const { body, author, source } = this.state
    return (
      <Form>
        <Form.Group controlId='formQuote'>
          <Form.Control
            as='textarea'
            rows='4'
            placeholder='Enter quote text...'
            onChange={this.handleOnChangeBody}
            value={body}
          />
        </Form.Group>

        <Form.Group controlId='formQuoteAuthor'>
          <Form.Control
            type='text'
            placeholder='Enter author...'
            onChange={this.handleOnChangeAuthor}
            value={author}
          />
        </Form.Group>

        <Form.Group controlId='formQuoteSource'>
          <Form.Control
            type='text'
            placeholder='Enter source...'
            onChange={this.handleOnChangeSource}
            value={source}
          />
        </Form.Group>

        <Row className='justify-content-center'>
          <Col className='text-center' sm={6}>
            <Tooltip
              title='Click to go to last viewed page.'
              position='left'
              trigger='mouseenter'
              animation='shift'
            >
              <ActionButton
                size='sm'
                variant='primary'
                className='m-1 backButton'
                onClick={this.handleOnBack}
                type=''
              >
                <NavActionIcon icon={faChevronLeft} /> Back
              </ActionButton>
            </Tooltip>
            <Tooltip
              title='Click to store your quote.'
              position='left'
              trigger='mouseenter'
              animation='shift'
            >
              <ActionButton
                size='sm'
                variant='primary'
                className='m-1 submitButton'
                onClick={this.handleOnSubmit}
                type='submit'
              >
                <NavActionIcon icon={faSave} /> Save
              </ActionButton>
            </Tooltip>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default connect()(withRouter(CreateQuoteForm))
