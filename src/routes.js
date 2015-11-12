import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import App from './containers/App';
import ArticleContainer from './containers/ArticleContainer';
import ListDetails from './containers/ListDetails';
import GroupsContainer from './containers/GroupsContainer';
import AccountContainer from './containers/AccountContainer';
import FriendsContainer from './containers/FriendsContainer';

export default (
  <Route path="/" component={App}>
  		<Route path='list' component={ArticleContainer} />
    	<Route path="list/:idList" component={ListDetails} />
    	<Route path='/account' component={AccountContainer} />
    	<Route path='/groups' component={GroupsContainer} />
    	<Route path='/friends' component={FriendsContainer} />
    	
  		<IndexRoute component={ArticleContainer} />
  </Route>
);