import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import IntroduceUser from './containers/IntroduceUser';

export default (
  <Route path="/" component={App}>
 	 <Route path="user" component={IntroduceUser} />
  </Route>
);
