import React from 'react'
import { Navbar, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">{siteTitle}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={2} title="Buy" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1} href="/items?type=bid">Bid on an auction</MenuItem>
          <MenuItem eventKey={2.2} href="/items?type=sale">Buy an item</MenuItem>
        </NavDropdown>
        <NavItem eventKey={4} href="/sell">Sell</NavItem>
        <NavItem eventKey={3} href="/about">About</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="/login">Log In</NavItem>
        <NavItem eventKey={2} href="/signup">Sign Up</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header
