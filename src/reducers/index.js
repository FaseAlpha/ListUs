
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import tasks from './task';
import lists from './list';
import aside from './aside';
import calendar from './calendar';

export default combineReducers({
  lists,
  tasks,
  aside,
  calendar,
  router
});
