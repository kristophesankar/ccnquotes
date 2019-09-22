/* Component Imports */
import styled from 'styled-components'
import Navbar, { Toggle, Brand } from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Colors */
const navTextColor = '#d1e8fa !important'
const navBackgroundColor = '#2369a3 !important'
const navAccentColor = '#6ED7D3 !important'

/* Styled Components */

/* Global */
export const Title = styled.h1`
  text-align: center;
  margin: 20px;
  font-weight: bold;
`

export const TruncatedText = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

/* Navbar */
export const CustomNavbar = styled(Navbar)`
  background: ${navBackgroundColor};
  font-size: inherit;
`

export const NavIcon = styled(FontAwesomeIcon)`
  color: ${navAccentColor};
`

export const CustomNavbarBrand = styled(Brand)`
  color: ${navTextColor};
  font-weight: 500;
  text-decoration: none !important;
  font-size: inherit;
`

export const CustomNavbarToggle = styled(Toggle)`
  color: ${navTextColor};
  border-color: ${navTextColor};
  font-size: inherit;
`

export const CustomNavbarLink = styled(Nav.Link)`
  color: ${navTextColor};
  margin-right: 10px;
  font-size: inherit;
  text-decoration: none !important;
  @media (max-width: 992px) {
    padding-top: 5px;
    padding-bottom: 10px;
  }
`
