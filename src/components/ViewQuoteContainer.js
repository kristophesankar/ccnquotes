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
import ViewQuote from './ViewQuote'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { Tooltip } from 'react-tippy'
import {
  faInfoCircle,
  faSave,
  faChevronLeft,
  faToggleOn,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons'

/* Container for view quote page */
const ViewQuoteContainer = props => {
  return (
    <Container id='viewQuoteContainer'>
      <Row>
        <Col sm={12}>
          <Title>Quote Actions&nbsp;
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
                          Turn off the form guard by clicking&nbsp;
                          <strong><NavIcon icon={faToggleOn} /> Toggle Editing</strong>.
                        </li><br />
                        <li>
                          You can edit quote by making your changes and clicking<br />
                          <strong><NavIcon icon={faSave} /> Update/Save</strong>.
                        </li><br />
                        <li>
                          You can delete the quote clicking the&nbsp;
                          <strong><NavIcon icon={faTrashAlt} /> Delete</strong> button.
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
          <ViewQuote />
        </Col>
      </Row>
    </Container>
  )
}

export default ViewQuoteContainer
