import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

export const AccountHeader = () => {
  return (
    <Nav pullRight>
      <NavItem eventKey={1} href="/login">Log In</NavItem>
      <NavItem eventKey={2} href="/signup">Sign Up</NavItem>
    </Nav>
  )
};

export default AccountHeader;