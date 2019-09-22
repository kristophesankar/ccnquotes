import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  Title,
  NavIcon,
  PopTitle,
  PopContent
} from '../styles/styles'
import { faInfoCircle, faSave, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import CreateQuoteForm from './CreateQuoteForm'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { Tooltip } from 'react-tippy'

/*
 * This is a container for the create quote form.
 * Contains basic layout of the page
 */
const CreateQuoteContainer = props => {
  return (
    <Container id='createQuoteContainer'>
      <Row>
        <Col sm={12}>
          <Title>Create Quote&nbsp;
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
                          Fill out the form below by typing in your quote, its author
                          and a source.
                        </li><br />
                        <li>
                          Clicking on the <strong><NavIcon icon={faSave} /> Save </strong>
                          button will store your entry.
                        </li><br />

                        <li>
                          Clicking the <NavIcon icon={faChevronLeft} /> <strong>Back </strong>
                          button will carry you to
                          the last page you viewed.
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
