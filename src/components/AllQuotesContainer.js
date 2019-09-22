import React, { Component } from 'react'
import QuoteList from './QuoteList'
import QuoteCard from './QuoteCard'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {
  Title,
  DivContainer,
  PanelTitle,
  NavIcon,
  PopTitle,
  PopContent
} from '../styles/styles'
import { Scrollbars } from 'react-custom-scrollbars'
import { faBookOpen, faListUl, faInfoCircle, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tippy'

class AllQuotesContainer extends Component {
  state = {
    selection: ''
  }

  /* On QuoteList item click set the selection property in state */
  handleSelection = quoteId => {
    this.setState({ selection: quoteId })
  }

  render () {
    return (
      <Container id='allQuotesContainer'>
        <Row>
          <Col sm={12}>
            <Title>
              All Quotes&nbsp;

              <Tooltip
                title='Click to show/hide instructions.'
                position='bottom'
                trigger='mouseenter'
                animation='shift'
              >
                {/* This trigger shows the page instructions */}
                <OverlayTrigger
                  trigger='click' placement='right' overlay={(
                    <Popover id='allQuotesPopover'>
                      <PopTitle>Instructions</PopTitle>
                      <PopContent as='p'>
                        <ul>
                          <li>
                            <strong>Click</strong> any card in the Quote List panel
                            to show details.
                          </li><br />
                          <li>
                            You can <strong>scroll</strong> on any panel when data
                            is out of view.
                          </li><br />
                          <li>
                            <strong>Click</strong> the <NavIcon icon={faEdit} /> to
                            go to the Quote Actions page.
                          </li><br />
                        </ul>
                      </PopContent>
                    </Popover>)}
                >
                  <NavIcon size='xs' icon={faInfoCircle} />
                </OverlayTrigger>
              </Tooltip>
            </Title>
          </Col>
          <Col sm={12} style={{ textAlign: 'right' }} />
        </Row>

        <Row>
          <Col id='quoteListColumn' sm={6}>
            <PanelTitle>
              <Tooltip
                title='All your saved quotes show up here!'
                position='bottom'
                trigger='mouseenter'
                animation='shift'
              >
                <NavIcon icon={faListUl} /> Quote List
              </Tooltip>
            </PanelTitle>

            <Scrollbars
              autoHide autoHideTimeout={1000}
              autoHideDuration={200} style={{ width: '100%', height: '65vh' }}
            >
              <DivContainer>
                {/*
                  * Pass in the handleSelection function to the QuoteList component
                  */}
                <QuoteList
                  onHandleSelection={this.handleSelection}
                  className='qL'
                />
              </DivContainer>
            </Scrollbars>
          </Col>
          <Col id='quoteCardColumn' sm={6}>
            <PanelTitle>
              <Tooltip
                title='Select a Quote and it will show up below!'
                position='bottom'
                trigger='mouseenter'
                animation='shift'
              >
                <NavIcon icon={faBookOpen} />  Quote Details
              </Tooltip>
            </PanelTitle>
            <Scrollbars
              autoHide autoHideTimeout={1000}
              autoHideDuration={200} style={{ width: '100%', height: '65vh' }}
            >
              <DivContainer>
                {/* Condition for showing selected card details */}
                {this.state.selection === '' ? (
                  <Card className='m-2 quoteListItem'>
                    <Card.Body>Select a card to view its details...</Card.Body>
                  </Card>
                ) : (
                  <QuoteCard quoteId={this.state.selection} />
                )}
              </DivContainer>
            </Scrollbars>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AllQuotesContainer
