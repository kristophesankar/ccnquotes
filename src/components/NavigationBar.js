import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>CCN Quotes</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className='showAllLink' as={NavLink} to='/'>
            Show all
          </Nav.Link>
          <Nav.Link className='createLink' as={NavLink} to='/create'>
            Add +
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
