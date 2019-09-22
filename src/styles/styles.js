/* Component Imports */
import styled from 'styled-components'
import Navbar, { Toggle, Brand } from 'react-bootstrap/Navbar'
import Card, { Body } from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Title as PopoverTitle, Content as PopoverContent } from 'react-bootstrap/Popover'

/* Colors */
export const navTextColor = '#d1e8fa !important'
export const navBackgroundColor = '#2369a3 !important'
export const navAccentColor = '#6ED7D3 !important'

/* Styled Components */

/* Global */
export const Title = styled.h1`
  text-align: center;
  margin: 20px;
  font-weight: bold;
`

export const ActionButton = styled(Button)`
  background: ${navAccentColor};
  border-color: ${navAccentColor};
`

export const PanelTitle = styled.h5`
  text-align: center;
  margin: 10px;
  font-weight: 600;
`

export const TruncatedText = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const NavIcon = styled(FontAwesomeIcon)`
  color: ${navAccentColor};
  &:hover { cursor: pointer}
`

export const NavActionIcon = styled(FontAwesomeIcon)`
  color: #fff;
  &:hover { cursor: pointer}
`

export const PopTitle = styled(PopoverTitle)`
  background: inherit;
  padding-left: 10px;
  padding-right: 10px;
  font-family: Poppins;
  font-weight: 600;
`

export const PopContent = styled(PopoverContent)`
  background: inherit;
  padding-top: 10px;
  font-family: Poppins;
  fon-size: inherit;
`

/* Navbar */
export const CustomNavbar = styled(Navbar)`
  background: ${navBackgroundColor};
  font-size: inherit;
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

export const CustomNavbarLink = styled(Link)`
  color: ${navTextColor};
  margin-right: 10px;
  font-size: inherit;
  text-decoration: none !important;
  @media (max-width: 992px) {
    padding-top: 5px;
    padding-bottom: 10px;
  }
`

/* QuoteList */
export const CustomCard = styled(Card)`
  font-size: inherit;
  &:hover {
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
    cursor: pointer;
  }
`

export const CustomCardBody = styled(Body)`
  font-size: inherit;
`

/* AllQuotesContainer */

export const DivContainer = styled.div`
  padding: 5px;
`

/* Quote Card */

export const QuoteDetailsCard = styled(Card)`
  border: none;
`

export const QuoteCardBody = styled.h2`
  padding: 0px 10px 0px 10px;
  font-weight: 300;
`

export const QuoteCardAuthor = styled.p`
  padding: 0px 10px 0px 10px;
`

export const QuoteCardSource = styled.em`
  padding: 0px 10px 0px 10px;
`
