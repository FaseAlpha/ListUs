

import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import ListContainer from './containers/ListContainer';

export default (
  <Route path="/" component={App}>
  	<Route path="list" component={ListContainer} />
    <Redirect path="*" to="/" />
  </Route>
);
