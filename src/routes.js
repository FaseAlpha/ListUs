import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import App from './containers/App';
import ArticleContainer from './containers/ArticleContainer';
import ListDetails from './containers/ListDetails';
import groupsContainer from './containers/groupsContainer';
import accountContainer from './containers/accountContainer';

export default (
  <Route path="/" component={App}>
  		<Route path='list' component={ArticleContainer} />
    	<Route path="list/:idList" component={ListDetails} />
    	<Route path='/account' component={accountContainer} />
    	<Route path='/groups' component={groupsContainer} />
  		<IndexRoute component={ArticleContainer} />
  </Route>
);