import React, { Component } from "react"
import { connect } from "react-redux"
import { getQuote } from "../utils/api"
import { withRouter } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import { handleUpdateQuote } from "../actions/"

class ViewQuote extends Component {
  state = {
    body: "",
    author: "",
    source: "",
    id: "",
    isDisabled: true
  }

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

  handleOnSubmit = event => {
    event.preventDefault()
    const { dispatch } = this.props
    const { id, body, author, source } = this.state
    dispatch(handleUpdateQuote({ id, body, author, source }))
  }

  handleEnableEditing = event => {
    event.preventDefault()
    this.setState(previousState => ({
      isDisabled: !previousState.isDisabled
    }))
  }

  componentDidMount() {
    const { match } = this.props
    getQuote(match.params.id).then(data => {
      this.setState({
        id: data.id,
        body: data.body,
        author: data.author,
        source: data.source
      })
    })
  }

  render() {
    const { history } = this.props
    const { body, author, source, isDisabled } = this.state
    return (
      <Form>
        <Form.Group controlId="formQuote">
          <Form.Control
            as="textarea"
            rows="4"
            placeholder="Enter quote text..."
            onChange={this.handleOnChangeBody}
            value={body}
            disabled={isDisabled}
          />
        </Form.Group>

        <Form.Group controlId="formQuoteAuthor">
          <Form.Control
            type="text"
            placeholder="Enter author..."
            onChange={this.handleOnChangeAuthor}
            value={author}
            disabled={isDisabled}
          />
        </Form.Group>

        <Form.Group controlId="formQuoteSource">
          <Form.Control
            type="text"
            placeholder="Enter source..."
            onChange={this.handleOnChangeSource}
            value={source}
            disabled={isDisabled}
          />
        </Form.Group>

        <Row className="justify-content-center">
          <Col className="text-center" sm={12}>
            <Button
              size="sm"
              variant="primary"
              className="m-1 backButton"
              onClick={event => {
                event.preventDefault()
                history.goBack()
              }}
              type=""
            >
              Back
            </Button>
            <Button
              size="sm"
              variant="primary"
              className="m-1 backButton"
              onClick={this.handleEnableEditing}
              type=""
            >
              Toggle Editing
            </Button>
            <Button
              size="sm"
              variant="primary"
              className="m-1 updateButton"
              onClick={this.handleOnSubmit}
              type="submit"
              disabled={isDisabled}
            >
              Update / Save
            </Button>
            <Button
              size="sm"
              variant="primary"
              className="m-1 deleteButton"
              onClick={this.handleOnDelete}
              type="submit"
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default connect()(withRouter(ViewQuote))
