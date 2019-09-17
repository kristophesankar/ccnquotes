import React, { Component } from "react"
import { getQuote } from "../utils/api"
import { withRouter } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"

class ViewQuote extends Component {
  state = {
    quote: {
      body: "",
      author: "",
      source: "",
      id: ""
    },
    isDisabled: true
  }

  handleOnChangeBody = event => {
    this.setState({
      quote: { body: event.target.value }
    })
  }

  handleOnChangeAuthor = event => {
    this.setState({
      quote: { author: event.target.value }
    })
  }

  handleOnChangeSource = event => {
    this.setState({
      quote: { source: event.target.value }
    })
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
        quote: data
      })
    })
  }

  render() {
    const { quote, isDisabled } = this.state
    return (
      <Form>
        <Form.Group controlId="formQuote">
          <Form.Control
            as="textarea"
            rows="4"
            placeholder="Enter quote text..."
            onChange={this.handleOnChangeBody}
            value={quote.body}
            disabled={isDisabled}
          />
        </Form.Group>

        <Form.Group controlId="formQuoteAuthor">
          <Form.Control
            type="text"
            placeholder="Enter author..."
            onChange={this.handleOnChangeAuthor}
            value={quote.author}
            disabled={isDisabled}
          />
        </Form.Group>

        <Form.Group controlId="formQuoteSource">
          <Form.Control
            type="text"
            placeholder="Enter source..."
            onChange={this.handleOnChangeSource}
            value={quote.source}
            disabled={isDisabled}
          />
        </Form.Group>

        <Row className="justify-content-center">
          <Col className="text-center" sm={12}>
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
              className="m-1 backButton"
              onClick={this.handleEnableEditing}
              type=""
            >
              Toggle Editing
            </Button>
            <Button
              variant="primary"
              className="m-1 UpdateButton"
              onClick={this.handleOnSubmit}
              type="submit"
            >
              Update / Save
            </Button>
            <Button
              variant="primary"
              className="m-1 UpdateButton"
              onClick={this.handleOnSubmit}
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

export default withRouter(ViewQuote)
