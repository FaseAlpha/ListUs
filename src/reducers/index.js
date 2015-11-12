
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import tasks from './task';
import lists from './list';
import aside from './aside';
import calendar from './calendar';
import comment from './comment';

export default combineReducers({
  lists,
  tasks,
  comment,
  aside,
  calendar,
  router
});
