import React, { Component } from "react"
import { connect } from "react-redux"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { handleSubmitQuote } from "../actions/index"
import { withRouter } from "react-router-dom"
import toast from "toasted-notes"
import "toasted-notes/src/styles.css"

class CreateQuoteForm extends Component {
  state = {
    body: "",
    author: "",
    source: "",
    bodyError: "You did not enter any quote in.",
    authorError: "You did not enter any author in.",
    sourceError: "You did not enter any source in."
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

  handleOnBack = event => {
    event.preventDefault()
    const { history } = this.props
    history.push(`/`)
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

    if (body === "") {
      toast.notify(bodyError, {
        position: "top-right"
      })
      error = true
    }

    if (author === "") {
      toast.notify(authorError, {
        position: "top-right"
      })
      error = true
    }

    if (source === "") {
      toast.notify(sourceError, {
        position: "top-right"
      })
      error = true
    }

    if (!error) {
      this.props.dispatch(handleSubmitQuote({ body, author, source }, history))
    }
  }

  render() {
    const { body, author, source } = this.state
    return (
      <Form>
        <Form.Group controlId="formQuote">
          <Form.Control
            as="textarea"
            rows="4"
            placeholder="Enter quote text..."
            onChange={this.handleOnChangeBody}
            value={body}
          />
        </Form.Group>

        <Form.Group controlId="formQuoteAuthor">
          <Form.Control
            type="text"
            placeholder="Enter author..."
            onChange={this.handleOnChangeAuthor}
            value={author}
          />
        </Form.Group>

        <Form.Group controlId="formQuoteSource">
          <Form.Control
            type="text"
            placeholder="Enter source..."
            onChange={this.handleOnChangeSource}
            value={source}
          />
        </Form.Group>

        <Row className="justify-content-center">
          <Col className="text-center" sm={6}>
            <Button
              variant="primary"
              className="m-1 backButton"
              onClick={this.handleOnBack}
              type=""
            >
              Back
            </Button>
            <Button
              variant="primary"
              className="m-1 submitButton"
              onClick={this.handleOnSubmit}
              type="submit"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

function mapStateToProps({ quotes }) {
  return {
    quotes
  }
}

export default connect(mapStateToProps)(withRouter(CreateQuoteForm))
