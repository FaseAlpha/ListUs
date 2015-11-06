import { combineReducers } from 'redux';
import task from './task.js';
import list from './list.js';

const reducers = combineReducers({
  task,
  list
});
