import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import lists from './list';
import tasks from './tasks';

const listApp = combineReducers({
  lists,
  tasks,
  router
});

export default listApp;
