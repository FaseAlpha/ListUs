import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import lists from './list';

const listApp = combineReducers({
  lists,
  router,
});

export default listApp;
