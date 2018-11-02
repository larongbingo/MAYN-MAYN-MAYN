import { Grid } from 'react-bootstrap';
import { Header } from './Navbar';
import React, { SFC } from 'react';

export const Layout: SFC = ({ children }) => 
<> 
  <Header />
  <Grid>{ children }</Grid>
</>;