import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { NavLink } from 'react-router-dom'
import { handleSearchData } from '../actions/'
import { debounce } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBook, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tippy'

class NavigationBar extends Component {
  // wait until user has typed before querying db
  handleOnChangeSearch = debounce((e) => {
    const { dispatch } = this.props
    dispatch(handleSearchData(e))
  }, 300);

  render () {
    return (
      <Navbar bg='nav-container' expand='lg'>
        <Navbar.Brand
          bsPrefix='bg-nav-container__brand'
          href='#home'
        ><FontAwesomeIcon className='bg-nav-container__logo--color' icon={faQuoteRight} /> CCN Quotes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link
              bsPrefix='nav-link bg-nav-container__link'
              className='showAllLink' as={NavLink} to='/'
            >
              <FontAwesomeIcon className='bg-nav-container__logo--color' icon={faBook} />
              <Tooltip
                title='Show all saved quotes.'
                position='left'
                trigger='mouseenter'
                animation='shift'
              > Show all
              </Tooltip>
            </Nav.Link>
            <Nav.Link
              bsPrefix='nav-link bg-nav-container__link'
              className='createLink' as={NavLink} to='/create'
            >
              <FontAwesomeIcon className='bg-nav-container__logo--color' icon={faPlus} />
              <Tooltip
                title='Add a new quote.'
                position='left'
                trigger='mouseenter'
                animation='shift'
              > Add
              </Tooltip>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type='text'
              as='input'
              onChange={(event) => this.handleOnChangeSearch(event.target.value)}
              placeholder='Type anything to search...'
              className='mr-sm-2'
              size='sm'
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default connect()(NavigationBar)
