import React from 'react'
import { FooterRow, FooterText } from '../styles/styles'
import Col from 'react-bootstrap/Col'

const Footer = props => {
  return (
    <FooterRow className='justify-content-center'>
      <Col className='text-center' sm={12}>
        <FooterText>Made with <span aria-label='love-emoji' role='img'>❤️</span> by Arjuna Kristophe Sankar.</FooterText>
      </Col>
    </FooterRow>
  )
}

export default Footer
