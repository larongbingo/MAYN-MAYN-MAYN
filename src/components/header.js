import React from 'react'
import { Navbar, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap'

import AccountHeader from './account.header';

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
          <MenuItem eventKey={2.1} href="/itemssale">Bid on an auction</MenuItem>
          <MenuItem eventKey={2.2} href="/itemsauction">Buy an item</MenuItem>
        </NavDropdown>
        <NavItem eventKey={4} href="/sell">Sell</NavItem>
        <NavItem eventKey={3} href="/about">About</NavItem>
      </Nav>
      <AccountHeader />
    </Navbar.Collapse>
  </Navbar>
);

export default Header
