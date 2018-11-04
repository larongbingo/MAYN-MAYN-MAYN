import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

import CookieCheck from '../utils/cookie.checker'

export const AccountHeader = () => {
  if(CookieCheck()) {
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href="/shoppingbag">Cart</NavItem>
        <NavItem eventKey={2} href="/logout">Log Out</NavItem>
      </Nav>
    )
  }
  
  return (
    <Nav pullRight>
      <NavItem eventKey={1} href="/login">Log In</NavItem>
      <NavItem eventKey={2} href="/signup">Sign Up</NavItem>
    </Nav>
  )
};

export default AccountHeader;