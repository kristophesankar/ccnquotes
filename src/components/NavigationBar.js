import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { NavLink } from 'react-router-dom'
import { handleSearchData } from '../actions/'
import { debounce } from 'lodash'
import { faPlus, faBook, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tippy'
import {
  CustomNavbar,
  CustomNavbarBrand,
  CustomNavbarToggle,
  NavIcon, CustomNavbarLink
} from '../styles/styles'

class NavigationBar extends Component {
  // wait until user has typed before querying db
  handleOnChangeSearch = debounce((e) => {
    const { dispatch } = this.props
    dispatch(handleSearchData(e))
  }, 300);

  render () {
    return (
      <CustomNavbar variant='dark' expand='lg'>
        <CustomNavbarBrand as={NavLink} to='/'>
          <NavIcon icon={faQuoteRight} /> CCN Quotes
        </CustomNavbarBrand>
        <CustomNavbarToggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <CustomNavbarLink
              className='showAllLink' as={NavLink} to='/'
            >
              <Tooltip
                title='Show all saved quotes.'
                position='left'
                trigger='mouseenter'
                animation='shift'
              >
                <NavIcon className='bg-nav-container__logo--color' icon={faBook} /> Show all
              </Tooltip>
            </CustomNavbarLink>
            <CustomNavbarLink
              className='createLink' as={NavLink} to='/create'
            >
              <Tooltip
                title='Add a new quote.'
                position='left'
                trigger='mouseenter'
                animation='shift'
              >
                <NavIcon className='bg-nav-container__logo--color' icon={faPlus} /> Add
              </Tooltip>
            </CustomNavbarLink>
          </Nav>
          <Form inline>
            <FormControl
              type='text'
              as='input'
              onChange={(event) => this.handleOnChangeSearch(event.target.value)}
              placeholder='Type anything to search...'
              className='mr-sm-2 searchBar'
              size='sm'
            />
          </Form>
        </Navbar.Collapse>
      </CustomNavbar>
    )
  }
}

export default connect()(NavigationBar)
