
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import tasks from './task';
import lists from './list';

export default combineReducers({
  lists,
  tasks,
  router
});
