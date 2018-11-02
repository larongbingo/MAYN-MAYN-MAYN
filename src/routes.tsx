import React, { SFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Index } from './pages/index';

export const Routes: SFC = () => <BrowserRouter>
  <Switch>
    <Route exact path="/" component={ Index } />
  </Switch>
</BrowserRouter>