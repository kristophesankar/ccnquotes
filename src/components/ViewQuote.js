import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuote } from '../utils/api'
import { withRouter } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { handleUpdateQuote, handleDeleteQuote } from '../actions/'
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css'
import { Tooltip } from 'react-tippy'
import { NavActionIcon, ActionButton, ActionButtonDelete } from '../styles/styles'
import { faSave, faChevronLeft, faToggleOn, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class ViewQuote extends Component {
  state = {
    body: '',
    author: '',
    source: '',
    id: '',
    isDisabled: true,
    isError: false
  }

  /* On change State Updaters */

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

  /* Button events */

  handleOnSubmit = event => {
    event.preventDefault()
    const { dispatch } = this.props
    const { id, body, author, source } = this.state
    dispatch(handleUpdateQuote({ id, body, author, source }))
    toast.notify('Quote was updated!', {
      position: 'top-right'
    })
  }

  handleOnDelete = event => {
    event.preventDefault()
    const { dispatch, history } = this.props
    const { id, body, author, source } = this.state
    dispatch(handleDeleteQuote({ id, body, author, source }))
    history.push('/')
    toast.notify('Quote was deleted!', {
      position: 'top-right'
    })
  }

  handleEnableEditing = event => {
    event.preventDefault()
    this.setState(previousState => ({
      isDisabled: !previousState.isDisabled
    }))
  }

  /* query db for individual quote and set local state */
  componentDidMount () {
    const { match } = this.props
    getQuote(match.params.id).then(data => {
      Object.entries(data).length > 0
        ? this.setState({
          id: data.id,
          body: data.body,
          author: data.author,
          source: data.source,
          isError: false
        })
        : this.setState({ isError: true })
    })
  }

  render () {
    const { history } = this.props
    const { body, author, source, isDisabled, isError } = this.state
    return (
      <div>
        {/* If there is no error show the form else show a placeholder */}
        {isError === false ? (
          <Form>
            <Form.Group controlId='formQuote'>
              <Form.Control
                as='textarea'
                rows='4'
                placeholder='Enter quote text...'
                onChange={this.handleOnChangeBody}
                value={body}
                disabled={isDisabled}
              />
            </Form.Group>

            <Form.Group controlId='formQuoteAuthor'>
              <Form.Control
                type='text'
                placeholder='Enter author...'
                onChange={this.handleOnChangeAuthor}
                value={author}
                disabled={isDisabled}
              />
            </Form.Group>

            <Form.Group controlId='formQuoteSource'>
              <Form.Control
                type='text'
                placeholder='Enter source...'
                onChange={this.handleOnChangeSource}
                value={source}
                disabled={isDisabled}
              />
            </Form.Group>

            <Row className='justify-content-center'>
              <Col className='text-center' sm={12}>
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
                    onClick={event => {
                      event.preventDefault()
                      history.goBack()
                    }}
                    type=''
                  >
                    <NavActionIcon icon={faChevronLeft} /> Back
                  </ActionButton>
                </Tooltip>
                <Tooltip
                  title='Click to enable/disable the form for editing.'
                  position='left'
                  trigger='mouseenter'
                  animation='shift'
                >
                  <ActionButton
                    size='sm'
                    variant='primary'
                    className='m-1 toggleButton'
                    onClick={this.handleEnableEditing}
                    type=''
                  >
                    <NavActionIcon icon={faToggleOn} /> Toggle Editing
                  </ActionButton>
                </Tooltip>
                <Tooltip
                  title='Click to save the updated record.'
                  position='left'
                  trigger='mouseenter'
                  animation='shift'
                >
                  <ActionButton
                    size='sm'
                    variant='primary'
                    className='m-1 updateButton'
                    onClick={this.handleOnSubmit}
                    type='submit'
                    disabled={isDisabled}
                  >
                    <NavActionIcon icon={faSave} /> Update / Save
                  </ActionButton>
                </Tooltip>
                <Tooltip
                  title='Caution! This will delete the current quote.'
                  position='left'
                  trigger='mouseenter'
                  animation='shift'
                >
                  <ActionButtonDelete
                    size='sm'
                    variant='primary'
                    className='m-1 deleteButton'
                    onClick={this.handleOnDelete}
                    type='submit'
                  >
                    <NavActionIcon icon={faTrashAlt} /> Delete
                  </ActionButtonDelete>
                </Tooltip>
              </Col>
            </Row>
          </Form>
        ) : (
          <Row>
            <Col sm='12' className='text-center noResource'>
              The requested resource does not exist.
            </Col>
          </Row>
        )}
      </div>
    )
  }
}

export default connect()(withRouter(ViewQuote))
