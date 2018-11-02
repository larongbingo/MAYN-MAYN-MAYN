import React, { SFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

export const Routes: SFC = () => <BrowserRouter>
  <Switch>
    <Route exact path="/" component={ App } />
  </Switch>
</BrowserRouter>