
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import task from './task';
import list from './list';

export default combineReducers({
  router,
  task,
  list
});
