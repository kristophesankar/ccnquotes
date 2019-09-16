import React, { Component } from "react"
import { connect } from "react-redux"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { handleSubmitQuote } from "../actions/index"
import { withRouter } from "react-router-dom"

class CreateQuoteForm extends Component {
  state = {
    body: "",
    author: "",
    source: ""
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
    const { history } = this.props
    this.props.dispatch(handleSubmitQuote(this.state, history))
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
            <Button variant="primary" className="m-1 backButton" type="">
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
