import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import ListDetails from './containers/ListDetails';

export default (
  <Route path="/" component={App}>
    	<Route path="/:idList" component={ListDetails} />
  </Route>
);